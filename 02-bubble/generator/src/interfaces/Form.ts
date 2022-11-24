export interface Form {
  type: "circle" | "polygon";
  data: CircleForm | PolygonForm;
}

export interface CircleForm {
  cx: number;
  cy: number;
  r: number;
  color: string;
}

export interface PolygonForm {}
