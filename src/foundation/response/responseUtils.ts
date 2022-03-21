import { RESPONSE } from "./constants";
import { AppResponse } from "./domains";

export function getResponseState(
  response?: any,
  filterData?: null | Function
): AppResponse {
  if (!response) return RESPONSE.onMount;
  if (response.hasError) {
    return { ...RESPONSE.error, error: response.errorMessage };
  } else {
    return {
      ...RESPONSE.success,
      data: filterData ? filterData(response) : response,
    };
  }
}
