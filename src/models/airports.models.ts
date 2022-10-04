export interface IAirport {
  id: number;
  name: string;
  ident: string;
  local_code: string;
  region: string;
  type: string;
  country: string;
}

export interface IServerResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}


export interface IResponseDetail {
  ident: string;
  local_code: string;
  name: string;
  coordinates: string;
  elevation_ft: string;
  gps_code: string;
  iata_code: string;
  continent: string;
  type: string;
  country: string;
  region: string;
  municipality: string;
}

export interface ITransformedData {
  airport_name: string
  details: [string, string][]
}

export interface IResponseCommentPost {
  id: number;
  created: Date;
  comment: string;
  airport: number;
  user: number;
}


export interface IUserComment {
  username: string;
  email: string;
}

export interface ITransformedCommentGet {
  id: number
  user: IUserComment
  created: Date
  comment: string
}

export interface IResponseCommentGet {
  count: number
  next: number
  previous: number
  results: ITransformedCommentGet[]
}






