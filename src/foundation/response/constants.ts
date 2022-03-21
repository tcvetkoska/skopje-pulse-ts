import { ResponseType } from "./domains";

export const RESPONSE: ResponseType = {
  error: {
    isError: true,
    isLoading: false,
    data: null,
  },
  onMount: {
    isLoading: true,
    data: [],
    isError: false,
  },
  success: {
    isLoading: false,
    isError: false,
  },
};
