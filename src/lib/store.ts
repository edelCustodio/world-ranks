import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./slices/countrySlice";
import { countryApi } from "./api/countryApiSlice";

export const store = configureStore({
  reducer: {
    country: countrySlice.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
