import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    onPrimary: string;
    minorText: string;
    border: string;
    headerBackground: string;
    onHeader: string;
    headerIcon: string;
    historyPillar: string;
    historyBackground: string;
    historyIcon: string;
    selectBackground: string;
    selectPaperBackground: string;
  }
}
