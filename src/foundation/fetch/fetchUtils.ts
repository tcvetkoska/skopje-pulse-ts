import { ResponseError } from "./domains";
import { errorsByStatusCode } from "./constants";

export function handleErrors(status: number): ResponseError {
  const errorMessage = errorsByStatusCode[status] ?? "Error occurred.";
  return { hasError: true, errorMessage: errorMessage };
}
export async function handleResponse<T>(
  promiseResponse: Response
): Promise<ResponseError | T> {
  if (!promiseResponse.ok) {
    return handleErrors(promiseResponse.status);
  }
  let response = await parseResponse(promiseResponse);

  return response;
}

async function parseResponse(response: Response) {
  try {
    return await response.json();
  } catch (e: any) {
    throw new Error(e);
  }
}
