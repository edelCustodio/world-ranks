import { ColumnDef, FilterFn, Row } from "@tanstack/react-table";
import { Country, Flag } from "../../../models/country";
import Image from "next/image";
import { Button } from "@components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { GridFilter } from "@components/grid/model/grid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

const regionColumnFilterFn: FilterFn<Country> = (
  row: Row<Country>,
  columnId: string,
  filterValue: string[]
) => {
  if (filterValue.length === 0) return true;

  return filterValue.includes(row.original.region.toLowerCase());
};

const unMemberColumnFilterFn: FilterFn<Country> = (
  row: Row<Country>,
  columnId: string,
  filterValue: boolean
) => {
  return row.original.unMember === filterValue;
};

const independentColumnFilterFn: FilterFn<Country> = (
  row: Row<Country>,
  columnId: string,
  filterValue: boolean
) => {
  return row.original.independent === filterValue;
};

const searchTextColumnFilterFn: FilterFn<Country> = (
  row: Row<Country>,
  columnId: string,
  filterValue: string
) => {
  const rowData = `${row.original.name.common.toLowerCase()} ${row.original.region.toLowerCase()} ${row.original.subregion.toLowerCase()}`;

  return rowData.includes(filterValue.toLowerCase());
};

export const countryColumns: ColumnDef<Country>[] = [
  {
    accessorKey: "flags",
    header: "Flag",
    cell: ({ row }) => {
      const flag = row.getValue("flags") as Flag;
      return <Image src={flag.svg} width={60} height={60} alt={flag.alt} />;
    },
  },
  {
    accessorKey: "name.common",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    filterFn: searchTextColumnFilterFn,
  },
  {
    accessorKey: "population",
    header: "Population",
    cell: ({ row }) => {
      const population = parseFloat(row.getValue("population"));
      const formatted = new Intl.NumberFormat("en-US").format(population);

      return formatted;
    },
  },
  {
    accessorKey: "area",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Area (Km2)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const area = parseFloat(row.getValue("area"));
      const formatted = new Intl.NumberFormat("en-US").format(area);

      return formatted;
    },
  },
  {
    accessorKey: "region",
    header: "Region",
    filterFn: regionColumnFilterFn,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const country = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log(country)}>
              View details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "unMember",
    header: "",
    filterFn: unMemberColumnFilterFn,
  },
  {
    accessorKey: "independent",
    header: "",
    filterFn: independentColumnFilterFn,
  },
];
