import { Option } from "./Option";

export interface Section {
  id: string;
  title: string;
  menu: string;
  options: Option[];
}
