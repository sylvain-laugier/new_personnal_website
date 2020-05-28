const stations = require('./stations.json');
const simpleFrance = require('./simple_france.json');
const corse = require('./corse.json');
const { intersect, polygon } = require('@turf/turf');
const voronoi = require('./voronoi.json');

class VoronoiStation {
  constructor() {
    this.data = getVoronoiStationsData();
  }
}
function getVoronoiStationsData() {
  return [
    ...getInteresectedvoronoi(simpleFrance),
    ...getInteresectedvoronoi(corse),
  ];
}

function getInteresectedvoronoi(geoMap) {
  const voronoiPolygons = createRawVoronoiPolygon(voronoi);

  return voronoiPolygons
    .map((voronoiPolygon) => {
      const intersected = intersect(
        voronoiPolygon,
        inverseLatLonGeoJson(geoMap)
      );

      return intersected
        ? {
            ...voronoiPolygon,
            geometry: intersected.geometry,
          }
        : null;
    })
    .filter((voronoiResult) => voronoiResult)
    .map((voronoiResult) =>
      convertGeoJsonToMapChartData(reversePolygonCoordinates(voronoiResult))
    );
}

function convertGeoJsonToMapChartData(geoJsonPolygon) {
  if (geoJsonPolygon.geometry.type === 'Polygon') {
    return {
      ...geoJsonPolygon.properties,
      geoPolygon: geoJsonPolygon.geometry.coordinates.map((polygon) =>
        polygon.map((coord) => ({
          latitude: coord[0],
          longitude: coord[1],
        }))
      ),
    };
  }
  if (geoJsonPolygon.geometry.type === 'MultiPolygon') {
    return {
      ...geoJsonPolygon.properties,
      geoPolygon: geoJsonPolygon.geometry.coordinates[0].map((polygon) =>
        polygon.map((coord) => ({
          latitude: coord[0],
          longitude: coord[1],
        }))
      ),
    };
  }
  return geoJsonPolygon;
}

function inverseLatLonGeoJson(geojson) {
  return {
    ...geojson,
    geometry: {
      ...geojson.geometry,
      coordinates: geojson.geometry.coordinates.map((linearRings) =>
        linearRings.map((coord) => [coord[1], coord[0]])
      ),
    },
  };
}

function reversePolygonCoordinates(geojson) {
  if (geojson.geometry.type === 'Polygon') {
    return {
      ...geojson,
      geometry: {
        ...geojson.geometry,
        coordinates: geojson.geometry.coordinates.map((linearRings) => {
          const indexOfLast = linearRings.length - 1;
          const editedArray = linearRings.slice(1, indexOfLast);
          editedArray.reverse();
          return [linearRings[0], ...editedArray, linearRings[indexOfLast]];
        }),
      },
    };
  }
  if (geojson.geometry.type === 'MultiPolygon') {
    return {
      ...geojson,
      geometry: {
        ...geojson.geometry,
        coordinates: [
          geojson.geometry.coordinates[0].map((linearRings) => {
            const indexOfLast = linearRings.length - 1;
            const editedArray = linearRings.slice(1, indexOfLast);
            editedArray.reverse();
            return [linearRings[0], ...editedArray, linearRings[indexOfLast]];
          }),
        ],
      },
    };
  }
  return geojson;
}

function createRawVoronoiPolygon(voronoi) {
  const algoVertices = voronoi.algo.vertices;
  const algoRegion = voronoi.algo.regions;

  return algoRegion.map((regionIndexes, i) =>
    polygon(buildPolygonForRegion(regionIndexes, algoVertices), {
      nom: stations[i].Nom,
      id: stations[i].ID,
      latitude: stations[i].Latitude,
      longitude: stations[i].Longitude,
      altitude: stations[i].Altitude,
    })
  );
}

function buildPolygonForRegion(regionIndexes, vertices) {
  const polygonCoordinates = regionIndexes.map((regionIndex) => [
    vertices[regionIndex][0],
    vertices[regionIndex][1],
  ]);

  return [[...polygonCoordinates, polygonCoordinates[0]]];
}

const voronoiSingleton = new VoronoiStation();
module.exports = { voronoiSingleton };
