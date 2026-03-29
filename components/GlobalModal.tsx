"use client";

import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useModal } from "../context/ModalContext";
import GenericModal from "./GenericModal";

export const MODAL_TYPES = {
  GENERIC_MODAL: "GENERIC_MODAL",
  CONFIRM_DIALOG: "CONFIRM_DIALOG",
  FORM_MODAL: "FORM_MODAL",
} as const;

// Generic modal registry - add your custom modals here
const MODALS: Record<string, React.FC<any>> = {
  GENERIC_MODAL: GenericModal,
  // Add more modal types as needed
  // CUSTOM_MODAL: CustomModal,
};

const GlobalModal: React.FC = () => {
  const { modalStack, hideModal } = useModal();

  if (modalStack.length === 0) return null;

  return (
    <>
      {modalStack.map((modal, index) => {
        const ModalComponent = MODALS[modal.type];
        const zIndex = 1300 + index; // MUI's default z-index for modals is 1300

        if (!ModalComponent) {
          console.warn(`Modal type "${modal.type}" not found in registry`);
          return null;
        }

        return (
          <Box
            key={modal.id}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: zIndex,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <React.Suspense fallback={<CircularProgress />}>
              <ModalComponent
                {...modal.props}
                onClose={() => hideModal(modal.id)}
              />
            </React.Suspense>
          </Box>
        );
      })}
    </>
  );
};

export default GlobalModal;
