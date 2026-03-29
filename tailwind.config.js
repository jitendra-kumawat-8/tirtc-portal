module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#1E3A8A",
          700: "#1D4ED8",
          500: "#3B82F6",
          DEFAULT: "#1D4ED8",
        },
        secondary: {
          600: "#EA580C",
          500: "#F97316",
          400: "#FB923C",
          DEFAULT: "#F97316",
        },
        accent: {
          500: "#06B6D4",
          400: "#22D3EE",
          DEFAULT: "#06B6D4",
        },
        background: {
          primary: "#FFFFFF",
          secondary: "#F8FAFC",
          muted: "#F1F5F9",
        },
        content: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
