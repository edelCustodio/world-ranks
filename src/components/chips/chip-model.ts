export interface IChip {
  text: string;
  value: any;
  active?: boolean;
  chipSelected?: (chip: IChip) => void;
}

export interface IChips {
  chips: IChip[];
  label: string;
  chipsSelected?: (chips: IChip[]) => void;
}
