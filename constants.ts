export const NO_AUTH = '__noAuth';

export const SELECT_DB_CONNECT = 'select db connection';

export const GET_REPOSITORY_ERROR = "get repository error, can't find entity";

export enum ServiceType {
  RAW_CONNECTION,
  MULTI_TABLE,
  MULTI_,
  ALL
}

export interface ServiceArgs {
  type: ServiceType;
}
