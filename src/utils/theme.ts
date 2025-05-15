// src/theme.ts
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2196f3",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: grey[700],
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    h1: { fontWeight: 600, fontSize: "2.2rem" },
    h2: { fontWeight: 600, fontSize: "1.8rem" },
    h3: { fontWeight: 500, fontSize: "1.5rem" },
    h4: { fontWeight: 500, fontSize: "1.25rem" },
    h5: { fontWeight: 500, fontSize: "1.1rem" },
    h6: { fontWeight: 400, fontSize: "1rem" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f4fa",
          borderRadius: 4,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          padding: 8,
        },
      },
    },
  },
});

export default theme;
