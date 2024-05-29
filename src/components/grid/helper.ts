import { Row } from "@tanstack/react-table";

export function multiSelectFilter<T extends object>(
  rows: Row<T>[],
  columnId: keyof T,
  filterValue: string[]
) {
  return filterValue.length === 0
    ? rows
    : rows.filter((row) =>
        filterValue.includes(String(row.original[columnId]))
      );
}
