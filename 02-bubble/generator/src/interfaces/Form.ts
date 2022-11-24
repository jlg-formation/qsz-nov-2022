export interface Form {
  type: string;
  data: CircleForm;
}

export interface CircleForm {
  cx: number;
  cy: number;
  r: number;
  color: string;
}
