type TableColumnsType = {
  id: string;
  label: string;
  minWidth: number;
};
export const tableColumns: Array<TableColumnsType> = [
  { id: "description", label: "Sensor Description", minWidth: 170 },
  { id: "comments", label: "Sensor Comments", minWidth: 100 },
];
