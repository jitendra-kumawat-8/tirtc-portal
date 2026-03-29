import { FormEvent, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import PortalShell from "../components/PortalShell";

type EmployerLoginForm = {
  organization: string;
  email: string;
  password: string;
};

const initialForm: EmployerLoginForm = {
  organization: "",
  email: "",
  password: "",
};

export default function EmployerLoginPage() {
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState<EmployerLoginForm>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(form).some((value) => !value.trim())) {
      enqueueSnackbar("Please complete all employer login fields.", { variant: "warning" });
      return;
    }

    enqueueSnackbar("Employer login form is ready for authentication wiring.", {
      variant: "success",
    });
    setForm(initialForm);
  };

  return (
    <PortalShell
      title="Employer Login | TIRTC"
      eyebrow="Employer Flow"
      heading="Employer access to the TIRTC talent pipeline"
      description="A clean employer login entry point designed to support credibility now and backend authentication later."
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack component="form" spacing={2.5} onSubmit={handleSubmit}>
                <TextField label="Organization name" value={form.organization} onChange={(event) => setForm((current) => ({ ...current, organization: event.target.value }))} />
                <TextField label="Work email" type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
                <TextField label="Password" type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} />
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button type="submit" variant="contained">Login</Button>
                  <Button href="/register" variant="outlined">Create account</Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ p: 3.5 }}>
              <Typography variant="h5" sx={{ mb: 1.5 }}>Why this page matters</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                The employer entry point signals that TIRTC is not only a training initiative but also a serious interface for workforce engagement.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In phase two, this can connect to role-based dashboards, partner-specific views, and candidate shortlisting workflows.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  );
}
