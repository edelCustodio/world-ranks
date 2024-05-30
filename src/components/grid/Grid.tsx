"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import TextBox from "@components/TextBox";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@components/ui/button";
import { GridProps } from "./model/grid";

export function Grid<TData, TValue>({
  columns,
  data,
  filters,
  setTotalRowsFiltered,
}: GridProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    unMember: false,
    independent: false,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  });

  const searchBarFilter = useMemo(() => {
    return (filters || []).filter((f) => f.usedBy === "search bar");
  }, [filters]);

  const columnFilter = useMemo(() => {
    return (filters || []).filter((f) => f.usedBy === "column");
  }, [filters]);

  useEffect(() => {
    for (let index = 0; index < columnFilter.length; index++) {
      const filter = columnFilter[index];
      table.getColumn(filter.filterBy)?.setFilterValue(filter);
    }
  }, [columnFilter, table]);

  useEffect(() => {
    const total = table.getFilteredRowModel().rows.length;
    setTotalRowsFiltered(total);
  }, [table, setTotalRowsFiltered]);

  const searchText = (text: string) => {
    for (let index = 0; index < searchBarFilter.length; index++) {
      const filter = searchBarFilter[index];
      table.getColumn(filter.filterBy)?.setFilterValue(text);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row-reverse">
        <TextBox changedEvent={searchText} />
      </div>
      <Table>
        <TableHeader className="text-[#6C727F]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-[#D2D5DA]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
