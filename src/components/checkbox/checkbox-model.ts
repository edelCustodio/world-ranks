export interface ICheckBox { 
    text: string;
    value?: boolean;
    checkedEvent?: (value: boolean) => void;
}