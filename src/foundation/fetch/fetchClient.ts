import { standardHeaders } from "./constants";
import { handleResponse } from "./fetchUtils";
import { FetchArgs } from "./domains";

function fetchMethod(method: string): Function {
  return async (args: FetchArgs) => {
    const response = await fetch(`https://skopje.pulse.eco/rest/${args.url}`, {
      method,
      headers: standardHeaders,
    });
    return handleResponse(response);
  };
}
// standard function usage
export function fetchClient(): Record<string, Function> {
  return {
    get: fetchMethod("GET"),
  };
}
