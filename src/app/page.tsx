'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

import TextBox from "@components/TextBox";
import { useState } from "react";
import Dropdown from "@components/dropdown/DropDown";

export default function Home() {

  const [dropDownData, setDropDownData] = useState([
    {
      "id": "name",
      "name": "Name",
    },
    {
      "id": "population",
      "name": "Population",
    },
    {
      "id": "area",
      "name": "Area",
    },
    {
      "id": "region",
      "name": "Region",
    },
  ])
  const handleSelect = () => {};

  return (
    <Card className="z-[1000px] absolute top-[250px] w-4/5 bg-[#1B1D1F] rounded-xl border-[#282B30]">
      <CardHeader>
        <CardTitle className="text-[#6C727F] text-lg flex justify-between items-center">
          <span>Found 234 countries </span>
          <TextBox />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <section>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <label className="text-[#6C727F] text-sm">Sort by</label>
              <Dropdown 
                id='columns'
                title='Columns'
                data={dropDownData}
                onSelect={handleSelect}/>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#6C727F] text-sm">Region</label>
              
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#6C727F] text-sm">Status</label>
              
            </div>
          </div>
        </section>
        <section></section>
      </CardContent>
    </Card>
  );
}
