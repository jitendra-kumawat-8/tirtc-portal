import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const fontFamily = {
  heading:
    '"Poppins", "Avenir Next", "Segoe UI", sans-serif',
  body: '"Inter", "Segoe UI", sans-serif',
};

const palette = {
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
  success: {
    main: "#1f9d68",
    light: "#39b87f",
    dark: "#17794f",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#d97706",
    light: "#f59e0b",
    dark: "#b45309",
    contrastText: "#ffffff",
  },
  error: {
    main: "#dc2626",
    light: "#ef4444",
    dark: "#b91c1c",
    contrastText: "#ffffff",
  },
  info: {
    main: "#2563eb",
    light: "#60a5fa",
    dark: "#1d4ed8",
    contrastText: "#ffffff",
  },
  grey: {
    50: "#f8fafc",
    100: "#eef2f6",
    200: "#d9e3ee",
    300: "#bfd0e0",
    400: "#8ea6bc",
    500: "#60758a",
    600: "#45586b",
    700: "#304255",
    800: "#1a2c3e",
    900: "#0b1f35",
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
  divider: "#d9e3ee",
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: fontFamily.body,
    h1: {
      fontFamily: fontFamily.heading,
      fontSize: "3.75rem",
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: fontFamily.heading,
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.14,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily: fontFamily.heading,
      fontSize: "2.15rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: fontFamily.heading,
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: fontFamily.heading,
      fontSize: "1.375rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: fontFamily.heading,
      fontSize: "1.1rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontFamily: fontFamily.body,
      fontSize: "1.1rem",
      lineHeight: 1.7,
    },
    subtitle2: {
      fontFamily: fontFamily.body,
      fontSize: "0.95rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: fontFamily.body,
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: fontFamily.body,
      fontSize: "0.92rem",
      lineHeight: 1.65,
    },
    button: {
      fontFamily: fontFamily.heading,
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
    overline: {
      fontFamily: fontFamily.heading,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "12px 22px",
          boxShadow: "none",
          fontSize: "0.95rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: `1px solid ${palette.grey[200]}`,
          boxShadow: "0 16px 40px rgba(11, 31, 53, 0.08)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 18,
            backgroundColor: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
