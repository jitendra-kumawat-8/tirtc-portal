import type { FormEvent } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import type { InterestForm } from "../../types";

interface InterestDialogProps {
  open: boolean;
  onClose: () => void;
  form: InterestForm;
  setForm: (updater: (prev: InterestForm) => InterestForm) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function InterestDialog({ open, onClose, form, setForm, onSubmit }: InterestDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Show Interest in TIRTC</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <div className="flex flex-col gap-4 pt-2">
            <TextField
              label="Full name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              fullWidth
            />
            <TextField
              label="Email address"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
              fullWidth
            />
            <TextField
              label="Phone number"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              required
              fullWidth
            />
            <TextField
              label="Interest type (Student / Employer / Other)"
              value={form.interestType}
              onChange={(e) => setForm((f) => ({ ...f, interestType: e.target.value }))}
              required
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} variant="text">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit Interest
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
