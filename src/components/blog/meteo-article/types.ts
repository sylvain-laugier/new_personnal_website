export interface PosteData {
  NUM_POSTE: string
  INST: number
  RR: number
  NBJRR1: number
  NBRR: number
  RRJOUR: number
  NBJRR5: number
  NBJRR10: number
  NBJRR50: number
  NBJRR100: number
}

export interface WeatherData {
  pluieSumByYear: {
    data: PosteData[]
  }
}

export enum NumStations {
  Brest = "7110",
  Nice = "7690",
  Normandie = "7020",
  Nantes = "7222",
  Bordeaux = "7510",
  SudOuest = "7607",
  Lyon = "7481",
  Orly = "7149",
}
