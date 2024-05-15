import { ColumnDef } from "@tanstack/react-table";
import { Country, Flag } from "./country";
import Image from "next/image";

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
    header: "Name",
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
    header: "Area (Km2)",
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
