import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageKey } from "../utils/localStorage";

type Language = "en" | "jp";

const initialLanguageState = () => {
  const language = localStorage.getItem(LocalStorageKey.LANGUAGE);

  if (language) {
    return language as Language;
  } else {
    localStorage.setItem(LocalStorageKey.LANGUAGE, "en");
    return "en";
  }
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialLanguageState(),
  reducers: {
    toggleLanguage(state) {
      state = state === "en" ? "jp" : "en";
      localStorage.setItem(LocalStorageKey.LANGUAGE, state);
      return state;
    },
  },
});

export default languageSlice.reducer;

export const { toggleLanguage } = languageSlice.actions;
