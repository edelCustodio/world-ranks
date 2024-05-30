import { Country } from "@models/country";
import { useQuery } from "react-query";

const QUERY_KEY = ["Country"];

const getCountries = async () => {
  console.log(process.env.REST_COUNTRIES);
  const allCountries = await fetch(
    `${process.env.REST_COUNTRIES}/all?fields=name,region,area,flags,population,independent,unMember,subregion,borders,cca3`,
    { method: "GET" }
  );
  const json = (await allCountries.json()) as Country[];
  const sortCountries = json.sort((a, b) =>
    a.population > b.population ? -1 : 1
  );

  return sortCountries;
};

export const useGetCountries = () => {
  return useQuery(QUERY_KEY, () => getCountries());
};
