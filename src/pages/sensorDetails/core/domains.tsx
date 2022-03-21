export interface SensorDetails {
  sensorId: string; // The unique ID of the sensor.
  position: string; // "Latidide longitute" GPS coordinates
  stamp: string; // Timestamp when the measurement was taken
  year: number; // (optional) year where the measurement was taken.
  type: string; // The type of the value taken
  value: string; // The actual value
}
export type Sensor24HData = Array<SensorDetails>;
export interface Average {
  from6: number;
  from12: number;
  from24: number;
}

export const defaultAverage: Average = {
  from6: 0,
  from12: 0,
  from24: 0,
};
export type FilterType = "pm25" | "pm10";
