import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/language";
import themeReducer from "./features/theme";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
