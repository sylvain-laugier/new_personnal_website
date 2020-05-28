import {
  inverseLatLonGeoJson,
  buildPolygonForRegion,
  createRawVoronoiPolygon,
  convertGeoJsonToMapChartData,
  reversePolygonCoordinates,
} from './prepareData';

describe('inverseLatLonGeoJson', () => {
  it('should inverse geojson coordinates', () => {
    const geoJSONDummy = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [0, 0],
            [10, 0],
            [10, 10],
            [0, 10],
            [0, 0],
          ],
        ],
      },
    };
    const expected = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [0, 0],
            [0, 10],
            [10, 10],
            [10, 0],
            [0, 0],
          ],
        ],
      },
    };
    const actual = inverseLatLonGeoJson(geoJSONDummy);
    expect(actual).toEqual(expected);
  });
});

describe('buildPolygonForRegion', () => {
  it('should return a polygon', () => {
    const regionIndexes = [0, 3, 1, 2];
    const vertices = [
      [15, 5],
      [25, 2],
      [10, 3],
      [47, -5],
    ];
    const actual = buildPolygonForRegion(regionIndexes, vertices);
    const expected = [
      [
        [15, 5],
        [47, -5],
        [25, 2],
        [10, 3],
        [15, 5],
      ],
    ];
    expect(actual).toEqual(expected);
  });
});

describe('createRawVoronoiPolygon', () => {
  it('should return an array of two polygons', () => {
    const voronoi = {
      algo: {
        regions: [
          [0, 3, 1, 2],
          [0, 1, 2, 3],
        ],
        vertices: [
          [15, 5],
          [25, 2],
          [10, 3],
          [47, -5],
        ],
      },
    };
    const expected = [
      {
        type: 'Feature',
        properties: { index: 0 },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [15, 5],
              [47, -5],
              [25, 2],
              [10, 3],
              [15, 5],
            ],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { index: 1 },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [15, 5],
              [25, 2],
              [10, 3],
              [47, -5],
              [15, 5],
            ],
          ],
        },
      },
    ];
    const actual = createRawVoronoiPolygon(voronoi);
    expect(actual).toEqual(expected);
  });
});

describe('convertGeoJsonToMapChartData', () => {
  it('should convert properly a polygon geoJson object', () => {
    const geojson = {
      type: 'Feature',
      properties: {
        test: 'test',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [15, 5],
            [47, -5],
            [25, 2],
            [10, 3],
            [15, 5],
          ],
        ],
      },
    };
    const expected = {
      test: 'test',
      geoPolygon: [
        [
          {
            latitude: 15,
            longitude: 5,
          },
          {
            latitude: 47,
            longitude: -5,
          },
          {
            latitude: 25,
            longitude: 2,
          },
          {
            latitude: 10,
            longitude: 3,
          },
          {
            latitude: 15,
            longitude: 5,
          },
        ],
      ],
    };
    const actual = convertGeoJsonToMapChartData(geojson);
    expect(actual).toEqual(expected);
  });
  it('should convert properly a multipolygon geoJson object', () => {
    const geojson = {
      type: 'Feature',
      properties: {
        test: 'test',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [15, 5],
              [47, -5],
              [25, 2],
              [10, 3],
              [15, 5],
            ],
            [
              [15, 5],
              [47, -5],
              [25, 2],
              [10, 3],
              [15, 5],
            ],
          ],
        ],
      },
    };
    const expected = {
      test: 'test',
      geoPolygon: [
        [
          {
            latitude: 15,
            longitude: 5,
          },
          {
            latitude: 47,
            longitude: -5,
          },
          {
            latitude: 25,
            longitude: 2,
          },
          {
            latitude: 10,
            longitude: 3,
          },
          {
            latitude: 15,
            longitude: 5,
          },
        ],
        [
          {
            latitude: 15,
            longitude: 5,
          },
          {
            latitude: 47,
            longitude: -5,
          },
          {
            latitude: 25,
            longitude: 2,
          },
          {
            latitude: 10,
            longitude: 3,
          },
          {
            latitude: 15,
            longitude: 5,
          },
        ],
      ],
    };
    const actual = convertGeoJsonToMapChartData(geojson);
    expect(actual).toEqual(expected);
  });
});

describe('reversePolygonCoordinates', () => {
  it('should return the same geojson with inversed polygon path', () => {
    const geojson = {
      type: 'Feature',
      properties: {
        test: 'test',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [15, 5],
            [47, -5],
            [25, 2],
            [10, 3],
            [15, 5],
          ],
        ],
      },
    };

    const expected = {
      type: 'Feature',
      properties: {
        test: 'test',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [15, 5],
            [10, 3],
            [25, 2],
            [47, -5],
            [15, 5],
          ],
        ],
      },
    };
    const actual = reversePolygonCoordinates(geojson);
    expect(actual).toEqual(expected);
  });

  it('should return the same geojson with inversed multiPolygon path', () => {
    const geojson = {
      type: 'Feature',
      properties: {
        test: 'test',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [15, 5],
              [47, -5],
              [25, 2],
              [10, 3],
              [15, 5],
            ],
            [
              [15, 5],
              [47, -5],
              [25, 2],
              [10, 3],
              [15, 5],
            ],
          ],
        ],
      },
    };

    const expected = {
      type: 'Feature',
      properties: {
        test: 'test',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [15, 5],
              [10, 3],
              [25, 2],
              [47, -5],
              [15, 5],
            ],
            [
              [15, 5],
              [10, 3],
              [25, 2],
              [47, -5],
              [15, 5],
            ],
          ],
        ],
      },
    };
    const actual = reversePolygonCoordinates(geojson);
    expect(actual).toEqual(expected);
  });
});
