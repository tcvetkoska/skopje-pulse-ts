export interface FetchArgs {
  url: string;
}
export const defaultFetchDetails: FetchArgs = {
  url: "",
};

export interface ResponseError {
  errorMessage: string;
  hasError: boolean;
}
