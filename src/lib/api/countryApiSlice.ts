import { Country } from "@models/country";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REST_COUNTRIES}` }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => `/all?fields=${process.env.COUNTRIES_BODY_FIELDS}`,
      transformResponse: (response: Country[]) => {
        return response.sort((a, b) => (a.population > b.population ? -1 : 1));
      },
    }),
    getCountryByCode: builder.query<Country, string>({
      query: (code: string) => `/alpha/${code}`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryByCodeQuery } = countryApi;
