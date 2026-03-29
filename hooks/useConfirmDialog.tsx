import { useState, useCallback } from "react";
import ConfirmDialog from "../components/ConfirmDialog";

export function useConfirmDialog() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [confirmText, setConfirmText] = useState<string>("Confirm");
  const [cancelText, setCancelText] = useState<string>("Cancel");
  const [severity, setSeverity] = useState<"info" | "warning" | "error">(
    "info"
  );
  const [resolver, setResolver] = useState<((result: boolean) => void) | null>(
    null
  );

  const confirm = useCallback(
    (
      message: string,
      title?: string,
      confirmText?: string,
      cancelText?: string,
      severity?: "info" | "warning" | "error"
    ) =>
      new Promise<boolean>((resolve) => {
        setMessage(message);
        setTitle(title);
        setConfirmText(confirmText || "Confirm");
        setCancelText(cancelText || "Cancel");
        setSeverity(severity || "info");
        setOpen(true);
        setResolver(() => resolve);
      }),
    []
  );

  const handleConfirm = () => {
    setOpen(false);
    resolver?.(true);
  };

  const handleCancel = () => {
    setOpen(false);
    resolver?.(false);
  };

  const dialog = (
    <ConfirmDialog
      open={open}
      title={title}
      message={message}
      confirmText={confirmText}
      cancelText={cancelText}
      severity={severity}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );

  return { confirm, dialog };
}
