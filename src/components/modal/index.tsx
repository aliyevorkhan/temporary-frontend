"use client";

import { createPortal } from "react-dom";
import ModalLayer from "./ModalLayer";
import { PropsWithChildren, useEffect, useState } from "react";
import ModalBody from "./ModalBody";
import { AnimatePresence } from "framer-motion";

type Props = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

const Modal = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <ModalLayer>
          <ModalBody onClose={props.onClose}>{props.children}</ModalBody>
        </ModalLayer>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
