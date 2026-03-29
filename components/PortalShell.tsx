import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";

interface PortalShellProps {
  title: string;
  eyebrow: string;
  heading: string;
  description: string;
  children: ReactNode;
}

export default function PortalShell({
  title,
  eyebrow,
  heading,
  description,
  children,
}: PortalShellProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Box
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, rgba(0, 117, 255, 0.12), transparent 28%), linear-gradient(180deg, #f7fbff 0%, #ffffff 30%, #f3f7fb 100%)",
        }}
      >
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          sx={{
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(11, 31, 53, 0.08)",
          }}
        >
          <Toolbar sx={{ minHeight: "72px" }}>
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: { xs: 0, sm: 2 },
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <IconButton
                  component={Link}
                  href="/"
                  aria-label="Back to home"
                  sx={{
                    border: "1px solid rgba(11, 31, 53, 0.08)",
                    bgcolor: "common.white",
                  }}
                >
                  <ArrowBackRounded />
                </IconButton>
                <Box>
                  <Typography variant="overline" color="primary.main">
                    TIRTC Portal
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary">
                    Telecom Innovation, Research & Training Centre
                  </Typography>
                </Box>
              </Stack>

              <Button component={Link} href="/apply" variant="contained">
                Apply Now
              </Button>
            </Container>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 760, mb: 5 }}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", letterSpacing: "0.16em" }}
            >
              {eyebrow}
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{ mt: 1.5, mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
            >
              {heading}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ maxWidth: 680 }}
            >
              {description}
            </Typography>
          </Box>

          {children}
        </Container>
      </Box>
    </>
  );
}
