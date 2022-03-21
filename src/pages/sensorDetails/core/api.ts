import { Sensor24HData } from "./domains";
import { fetchClient } from "../../../foundation/fetch/fetchClient";
import { getResponseState } from "../../../foundation/response/responseUtils";
import { filterBySensorIdAndPm } from "./utils";
import { AppResponse } from "../../../foundation/response/domains";

export async function get24hSensorsByPmAndId(id: string): Promise<AppResponse> {
  const response: Sensor24HData = await fetchClient().get({ url: "data24h" });
  return getResponseState(response, (data: Sensor24HData) =>
    filterBySensorIdAndPm(data, id)
  );
}
