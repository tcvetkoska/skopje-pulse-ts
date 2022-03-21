import { SensorData } from "./domains";

export function filterActiveSensors(sensorsResponse: SensorData): SensorData {
  return sensorsResponse.filter((sensor) => sensor.status === "ACTIVE");
}
