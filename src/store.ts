import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
