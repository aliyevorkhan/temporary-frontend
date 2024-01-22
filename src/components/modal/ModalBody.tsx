import { motion } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useClickAway } from "react-use";

type Props = PropsWithChildren<{
  onClose: () => void;
}>;

const ModalBody = (props: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onClose();
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  useClickAway(ref, () => {
    props.onClose();
  });

  return (
    <motion.div
      ref={ref}
      className="relative bg-white dark:bg-dark-surface-high-medium rounded-xl overflow-hidden w-[80%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default ModalBody;
