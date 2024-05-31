import { Table } from "@tanstack/react-table";
import { useCallback, useEffect } from "react";

function useGetTotalRows<TData>(
  table: Table<TData>,
  setTotalRowsFiltered: (total: number) => void
) {
  const rowModel = table.getFilteredRowModel();
  const total = useCallback(() => rowModel.rows.length, [rowModel]);

  useEffect(() => {
    setTotalRowsFiltered(total());
  }, [total, setTotalRowsFiltered]);
}

export default useGetTotalRows;
