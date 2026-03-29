import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalStackItem {
  type: string;
  props: any;
  id: string;
}

interface ModalContextType {
  modalStack: ModalStackItem[];
  showModal: (type: string, props?: any) => void;
  hideModal: (id?: string) => void;
  hideAllModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalStack, setModalStack] = useState<ModalStackItem[]>([]);

  const showModal = (type: string, props: any = {}) => {
    const newModal: ModalStackItem = {
      type,
      props,
      id: Date.now().toString(), // Unique ID for each modal
    };
    setModalStack((prev) => [...prev, newModal]);
  };

  const hideModal = (id?: string) => {
    if (id) {
      // Remove specific modal by ID
      setModalStack((prev) => prev.filter((modal) => modal.id !== id));
    } else {
      // Remove the last modal (top of stack)
      setModalStack((prev) => prev.slice(0, -1));
    }
  };

  const hideAllModals = () => {
    setModalStack([]);
  };

  return (
    <ModalContext.Provider
      value={{ modalStack, showModal, hideModal, hideAllModals }}
    >
      {children}
    </ModalContext.Provider>
  );
};
