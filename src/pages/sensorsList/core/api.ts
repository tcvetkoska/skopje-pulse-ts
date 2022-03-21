import { SensorData } from './domains';
import { fetchClient } from "../../../foundation/fetch/fetchClient";
import { AppResponse } from "../../../foundation/response/domains";
import { getResponseState } from "../../../foundation/response/responseUtils";
import { filterActiveSensors } from "./utils";

export async function getAllActiveSensors(): Promise<AppResponse> {
  const response: SensorData = await fetchClient().get({ url: "sensor" });
  return getResponseState(response, filterActiveSensors);
}
