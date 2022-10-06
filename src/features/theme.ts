import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageKey } from "../utils/localStorage";

type Theme = "Dark" | "Light";

const initialThemeState = () => {
  const theme = localStorage.getItem(LocalStorageKey.THEME);

  if (theme) {
    return theme as Theme;
  } else {
    localStorage.setItem(LocalStorageKey.THEME, "Light");
    return "Light";
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState(),
  reducers: {
    toggleTheme(state, _) {
      state = state === "Dark" ? "Light" : "Dark";
      localStorage.setItem(LocalStorageKey.THEME, state);
      return state;
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
