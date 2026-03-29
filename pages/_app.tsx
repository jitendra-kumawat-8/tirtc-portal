// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../theme";
import { AuthProvider } from "../context/AuthContext";
import { InterestFlowProvider } from "../context/InterestFlowContext";
import { NavigationProvider } from "../context/NavigationProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { ModalProvider } from "../context/ModalContext";
import GlobalModal from "../components/GlobalModal";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <AuthProvider>
            <InterestFlowProvider>
              <NavigationProvider>
                <ModalProvider>
                  <Component {...pageProps} />
                  <GlobalModal />
                </ModalProvider>
              </NavigationProvider>
            </InterestFlowProvider>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
