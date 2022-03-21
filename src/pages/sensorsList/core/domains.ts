export interface Sensor {
  sensorId: string; // The unique ID of the sensor.
  position: string; // "Latidide longitute" GPS coordinates
  type: string; // The type ID of the sensor
  description: string; // Short decription / name
  comments: string; // Any other comments
  status: string; // The current status of the sensor
}
export type SensorData = Array<Sensor>;
