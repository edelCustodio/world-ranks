import { ColumnDef } from "@tanstack/react-table";
import { Country, Flag } from "./country";
import Image from "next/image";
import { Button } from "@components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

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
  },
];
