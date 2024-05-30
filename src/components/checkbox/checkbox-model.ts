export interface ICheckBox {
  text: string;
  name: string;
  value?: boolean;
  checkedEvent: (name: string, value: boolean) => void;
}
