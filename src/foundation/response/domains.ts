export type AppResponse = {
  isLoading: boolean;
  isError: boolean;
  data?: any;
  error?: string;
};
export type ResponseType = {
  error: AppResponse;
  onMount: AppResponse;
  success: AppResponse;
};
