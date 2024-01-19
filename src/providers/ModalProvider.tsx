"use client";

import Modal from "@/components/modal";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, createContext, useState } from "react";

type ModalProviderProps = PropsWithChildren;

export const ModalContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
      }}
    >
      <AnimatePresence mode="wait">
        {isOpen && <Modal isOpen={false} onClose={console.log} />}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
