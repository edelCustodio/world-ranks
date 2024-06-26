import { ColumnDef } from "@tanstack/react-table";

export interface GridProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
  filters?: GridFilter[];
  setTotalRowsFiltered: (total: number) => void;
}

export interface GridFilter {
  /**
   * Column name
   */
  filterBy: string;

  /**
   * It could be any value type:
   *
   * `string, string[], number, number[]`
   *
   * .... etc.
   */
  value: any;

  usedBy: "column" | "search bar";
}
