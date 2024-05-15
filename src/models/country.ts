import { ColumnDef } from "@tanstack/react-table";

export type Country = {
  flags: Flag;
  name: Name;
  region: string;
  area: number;
  population: number;
};

export type Flag = {
  png: string;
  svg: string;
  alt: string;
};

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type NativeName = {
  ron: Ron;
};

type Ron = {
  common: string;
  official: string;
};


