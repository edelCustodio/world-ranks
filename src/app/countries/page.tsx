"use client";

import CheckBox from "@components/checkbox/CheckBox";
import Chips from "@components/chips/Chips";
import { IChip } from "@components/chips/chip-model";
import Dropdown from "@components/dropdown/DropDown";
import { Grid } from "@components/grid/Grid";
import { GridFilter } from "@components/grid/model/grid";
import { Card, CardContent } from "@components/ui/card";
import { Country } from "@models/country";
import { countryColumns } from "@models/country-grid-helper";
import React, { useEffect, useState } from "react";

const Countries = () => {
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

  const [countries, setCountries] = useState<Country[]>([]);
  const [filters, setFilters] = useState<GridFilter[]>([
    {
      filterBy: "name_common",
      usedBy: "search bar",
      value: "",
    },
  ]);
  const [totalRows, setTotalRows] = useState(0);

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

  useEffect(() => {
    const getCountries = async () => {
      const allCountries = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,region,area,flags,population,independent,unMember,subregion,borders,cca3",
        { method: "GET" }
      );
      const json = (await allCountries.json()) as Country[];
      const sortCountries = json.sort((a, b) =>
        a.population > b.population ? -1 : 1
      );
      setCountries(sortCountries);
    };

    getCountries();
  }, []);

  const handleSelect = () => {};

  const handleStatusEvent = (name: string, value: boolean) => {
    let statusFilter: GridFilter = {
      filterBy: name,
      value,
      usedBy: "column",
    };

    let filtersUpdate: any[] = [];

    let filter = filters.filter((f) => f.filterBy === name)[0];

    if (filter) {
      filter.value = value;
      filtersUpdate = [...filters];
    } else {
      filtersUpdate = [...filters, statusFilter];
    }

    setFilters(filtersUpdate);
  };

  const handleChipsEvent = (chips: IChip[]) => {
    let regionFilter: GridFilter = {
      filterBy: "region",
      value: chips.map((c) => (c.value as string).toLowerCase()),
      usedBy: "column",
    };

    let filtersUpdated: GridFilter[] = [];
    let filter = filters.filter((f) => f.filterBy === regionFilter.filterBy)[0];

    if (filter) {
      filtersUpdated = filters.map((s) =>
        s.filterBy === regionFilter.filterBy ? regionFilter : s
      );
    } else {
      filtersUpdated = [...filters, regionFilter];
    }

    setFilters(filtersUpdated);
  };

  return (
    <Card className="z-[1000px] absolute top-[250px] bg-[#1B1D1F] rounded-xl border-[#282B30] w-4/5">
      <CardContent className="grid grid-cols-12 gap-4">
        <section className="flex flex-col gap-10 lg:col-span-3 m-2 p-2 sm:col-span-4 mt-6 ">
          <div className="text-[#6C727F] text-lg flex justify-between items-center">
            <span>Found {totalRows} countries </span>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#6C727F] text-xs">Sort by</label>
            <Dropdown
              id="columns"
              title="Columns"
              data={dropDownData}
              onSelect={handleSelect}
            />
          </div>
          <Chips
            chips={chips}
            label="Region"
            chipsSelected={handleChipsEvent}
          />
          <div className="flex flex-col gap-3">
            <label className="text-[#6C727F] text-xs">Status</label>
            <CheckBox
              text="Member of the United Nations"
              name="unMember"
              checkedEvent={handleStatusEvent}
            />
            <CheckBox
              text="Independent"
              name="independent"
              checkedEvent={handleStatusEvent}
            />
          </div>
        </section>
        <section className="lg:col-span-9 sm:col-span-8 mt-6">
          <Grid
            columns={countryColumns}
            data={countries}
            filters={filters}
            setTotalRowsFiltered={setTotalRows}
          />
        </section>
      </CardContent>
    </Card>
  );
};

export default Countries;
