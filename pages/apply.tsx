import { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import PortalShell from "../components/PortalShell";

type ApplicationForm = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  highestQualification: string;
  selectedCourse: string;
  availability: string;
  motivation: string;
  consent: boolean;
};

const initialForm: ApplicationForm = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  highestQualification: "",
  selectedCourse: "",
  availability: "",
  motivation: "",
  consent: false,
};

export default function ApplyPage() {
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState<ApplicationForm>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requiredFields = [
      form.fullName,
      form.email,
      form.phone,
      form.city,
      form.highestQualification,
      form.selectedCourse,
      form.availability,
      form.motivation,
    ];

    if (requiredFields.some((value) => !value.trim()) || !form.consent) {
      enqueueSnackbar("Please complete all required fields and accept the declaration.", {
        variant: "warning",
      });
      return;
    }

    enqueueSnackbar("Candidate details captured. Ready for backend integration or handoff.", {
      variant: "success",
    });
    setForm(initialForm);
  };

  return (
    <PortalShell
      title="Apply | TIRTC"
      eyebrow="Candidate Flow"
      heading="Apply to a TIRTC program"
      description="This form combines registration, candidate details, and training-interest capture into one responsive application flow."
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h5" sx={{ mb: 1 }}>Registration</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Basic account and contact information to begin the candidate journey.
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Full name" fullWidth required value={form.fullName} onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Email address" type="email" fullWidth required value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Phone number" fullWidth required value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="City" fullWidth required value={form.city} onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))} />
                    </Grid>
                  </Grid>

                  <Box>
                    <Typography variant="h5" sx={{ mb: 1 }}>Candidate details</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Capture profile information that admissions or outreach teams can act on quickly.
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Highest qualification" fullWidth required value={form.highestQualification} onChange={(event) => setForm((current) => ({ ...current, highestQualification: event.target.value }))} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Availability" select fullWidth required value={form.availability} onChange={(event) => setForm((current) => ({ ...current, availability: event.target.value }))}>
                        <MenuItem value="Immediate">Immediate</MenuItem>
                        <MenuItem value="Within 30 days">Within 30 days</MenuItem>
                        <MenuItem value="Need guidance first">Need guidance first</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>

                  <Box>
                    <Typography variant="h5" sx={{ mb: 1 }}>Training interest</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Keep the v1 experience simple while still capturing intent and preferred track.
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField label="Selected course" select fullWidth required value={form.selectedCourse} onChange={(event) => setForm((current) => ({ ...current, selectedCourse: event.target.value }))}>
                        <MenuItem value="Telecom Network Operations">Telecom Network Operations</MenuItem>
                        <MenuItem value="Fiber & Broadband Deployment">Fiber & Broadband Deployment</MenuItem>
                        <MenuItem value="Digital Support & Service Excellence">Digital Support & Service Excellence</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Why are you interested in this program?"
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        value={form.motivation}
                        onChange={(event) => setForm((current) => ({ ...current, motivation: event.target.value }))}
                      />
                    </Grid>
                  </Grid>

                  <FormControlLabel
                    control={<Checkbox checked={form.consent} onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))} />}
                    label="I confirm that the submitted details are accurate and can be used for admissions follow-up."
                  />

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button type="submit" variant="contained">Submit Application</Button>
                    <Button href="/register" variant="outlined">Need to register first?</Button>
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>What this covers</Typography>
                <Typography variant="body2" color="text.secondary">Registration, candidate details, and training-interest capture are bundled into one launch-ready form.</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>30/70 model reminder</Typography>
                <Typography variant="body2" color="text.secondary">The portal messaging reinforces 30% guided foundations and 70% applied practical learning.</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </PortalShell>
  );
}
