import { ColumnDef, FilterFn, Row } from "@tanstack/react-table";
import { Country, Flag } from "./country";
import Image from "next/image";
import { Button } from "@components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { GridFilter } from "@components/grid/model/grid";

const regionColumnFilterFn: FilterFn<Country> = (
  row: Row<Country>,
  columnId: string,
  filters: GridFilter[]
) => {
  const regionFilter = filters.filter((f) => f.filterBy === columnId)[0];

  if (!regionFilter) return true;

  if (regionFilter.value.length === 0) return true;

  return regionFilter.value.includes(row.original.region.toLowerCase());
};

const unMemberColumnFilterFn: FilterFn<Country> = (
  row: Row<Country>,
  columnId: string,
  filters: GridFilter[]
) => {
  const filter = filters.filter((f) => f.filterBy === columnId)[0];

  if (!filter) return true;

  return row.original.unMember === filter.value;
};

const independentColumnFilterFn: FilterFn<Country> = (
  row: Row<Country>,
  columnId: string,
  filters: GridFilter[]
) => {
  const filter = filters.filter((f) => f.filterBy === columnId)[0];

  if (!filter) return true;

  return row.original.independent === filter.value;
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
    accessorKey: "unMember",
    header: "",
    filterFn: unMemberColumnFilterFn,
    enableHiding: true,
  },
  {
    accessorKey: "independent",
    header: "",
    filterFn: independentColumnFilterFn,
    enableHiding: true,
  },
];
