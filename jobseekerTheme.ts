import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D4ED8",   // 700 — primary buttons
      light: "#3B82F6",  // 500 — hover / links
      dark: "#1E3A8A",   // 900 — deep navy, headings
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F97316",   // 500 — buttons / highlights
      light: "#FB923C",  // 400 — lighter accents
      dark: "#EA580C",   // 600 — strong orange, CTA hover
      contrastText: "#ffffff",
    },
    accent: {
      main: "#06B6D4",   // 500 — cyan, tech vibe
      light: "#22D3EE",  // 400
      dark: "#0891B2",   // 600
      contrastText: "#ffffff",
    },
    text: {
      primary: "#0F172A",   // main text (almost black)
      secondary: "#475569", // paragraph text
      disabled: "#94A3B8",  // labels / captions
    },
    background: {
      default: "#F8FAFC",   // section alternate
      paper: "#FFFFFF",     // main page / cards
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Poppins", "sans-serif"].join(","),
    h1: {
      fontFamily: "Poppins",
    },
    h2: {
      fontFamily: "Poppins",
    },
    h3: {
      fontFamily: "Poppins",
    },
    h4: {
      fontFamily: "Poppins",
    },
    h5: {
      fontFamily: "Poppins",
    },
    h6: {
      fontFamily: "Poppins",
    },
    body1: {
      fontFamily: "Roboto",
    },
    body2: {
      fontFamily: "Roboto",
    },
    subtitle1: {
      fontFamily: "Inter",
    },
    subtitle2: {
      fontFamily: "Inter",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 400,
          fontSize: "16px",
          fontFamily: "Poppins",
          padding: "8px 16px",
        },
        containedPrimary: {
          backgroundColor: "#1D4ED8",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#1E3A8A",
          },
        },
        outlinedPrimary: {
          borderColor: "#1D4ED8",
          color: "#1D4ED8",
          "&:hover": {
            borderColor: "#1E3A8A",
            color: "#1E3A8A",
          },
        },
        textPrimary: {
          color: "#3B82F6",
          "&:hover": {
            backgroundColor: "rgba(29, 78, 216, 0.08)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderColor: "#E5E7EB",
            fontFamily: "Poppins",
            borderRadius: "8px",
            "& .MuiOutlinedInput-input": {
              padding: "12px",
            },
            "& fieldset": {
              borderColor: "#E5E7EB",
            },
            "&:hover fieldset": {
              borderColor: "#1D4ED8",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1D4ED8",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#4B5563",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#1D4ED8",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          height: "fit-content",
          "& .MuiOutlinedInput-root": {
            borderColor: "#E5E7EB",
            fontFamily: "Poppins",
            borderRadius: "8px",
            padding: "0px",
            "& .MuiOutlinedInput-input": {
              padding: "12px",
            },
            "& fieldset": {
              borderColor: "#E5E7EB",
            },
            "&:hover fieldset": {
              borderColor: "#1D4ED8",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1D4ED8",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#4B5563",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#1D4ED8",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          fontFamily: "Poppins",
          fontWeight: 400,
          backgroundColor: "#E5E7EB",
          color: "#111827",
          fontSize: "14px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root": {
            color: "#374151",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 400,
          },
        },
      },
    },
  },
});

export default theme;
