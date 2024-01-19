"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, useCallback, useEffect } from "react";
import useModal from "@/hooks/useModal";

type Props = PropsWithChildren<{}>;

const ModalLayer = (props: Props) => {
  const { onClose } = useModal();
  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return (
    <motion.div
      layout
      className="h-screen w-screen bg-light-source-opacity-black-0.5 dark:bg-dark-source-opacity-black-0.5 top-0 left-0 fixed z-[9999] flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default ModalLayer;
