import { Country } from "@models/country";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CountryState {
  countries: Country[] | undefined;
  country: Country | null;
}

const initialState: CountryState = {
  countries: undefined,
  country: null,
};

export const countrySlice = createSlice({
  name: "Country",
  initialState,
  reducers: {
    saveCountries: (state, action: PayloadAction<Country[] | undefined>) => {
      const countries = action.payload;
      state.countries = countries && [...countries];
    },
    selectCountry: (state, action: PayloadAction<string>) => {
      state.country =
        state.countries?.find((f) => f.id === action.payload) || null;
    },
  },
});

export const { saveCountries, selectCountry } = countrySlice.actions;

export const selectCountries = (state: RootState) => state.country.countries;

export default countrySlice.reducer;
