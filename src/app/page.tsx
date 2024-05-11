"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

import TextBox from "@components/TextBox";
import { useState } from "react";
import Dropdown from "@components/dropdown/DropDown";
import Chips from "@components/chips/Chips";
import { IChip, IChips } from "@components/chips/chip-model";

export default function Home() {
  const [dropDownData, setDropDownData] = useState([
    {
      id: "name",
      name: "Name",
    },
    {
      id: "population",
      name: "Population",
    },
    {
      id: "area",
      name: "Area",
    },
    {
      id: "region",
      name: "Region",
    },
  ]);

  const chips = [
    {
      text: "Americas",
      value: "americas",
    },
    {
      text: "Antartic",
      value: "antartic",
    },
    {
      text: "Africa",
      value: "africa",
    },
    {
      text: "Asia",
      value: "asia",
    },
    {
      text: "Europe",
      value: "europe",
    },
    {
      text: "Oceania",
      value: "oceania",
    },
  ] as IChip[];

  const handleSelect = () => {};

  return (
    <Card className="z-[1000px] absolute top-[250px] w-4/5 bg-[#1B1D1F] rounded-xl border-[#282B30]">
      <CardHeader>
        <CardTitle className="text-[#6C727F] text-lg flex justify-between items-center">
          <span>Found 234 countries </span>
          <TextBox />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-12 gap-4">
        <section className="flex flex-col gap-10 lg:col-span-3 m-2 p-2 sm:col-span-4">
          <div className="flex flex-col gap-3">
            <label className="text-[#6C727F] text-xs">Sort by</label>
            <Dropdown
              id="columns"
              title="Columns"
              data={dropDownData}
              onSelect={handleSelect}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#6C727F] text-xs">Region</label>
            <Chips chips={chips} />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#6C727F] text-xs">Status</label>
          </div>
        </section>
        <section className="lg:col-span-9 sm:col-span-8"></section>
      </CardContent>
    </Card>
  );
}
