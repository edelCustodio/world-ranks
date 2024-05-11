export interface IChip {
    text: string;
    value: string | number;
    chipSelected?: (chip: IChip) => void
}

export interface IChips {
    chips: IChip[];
}