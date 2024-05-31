import { Table } from "@tanstack/react-table";
import { useEffect, useMemo } from "react";
import { GridFilter } from "../model/grid";

function useSetFilterToColumn<TData>(
  table: Table<TData>,
  filters: GridFilter[] | undefined
) {
  useEffect(() => {
    if (!filters) return;

    for (let index = 0; index < filters.length; index++) {
      const filter = filters[index];
      table.getColumn(filter.filterBy)?.setFilterValue(filter.value);
    }
  }, [filters, table]);
}

export default useSetFilterToColumn;
