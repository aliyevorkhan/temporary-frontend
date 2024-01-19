import useModal from "@/hooks/useModal";
import { motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { useClickAway } from "react-use";

type Props = PropsWithChildren<{
  onClose: () => void;
}>;

const ModalBody = (props: Props) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    props.onClose();
  });

  return (
    <motion.div
      ref={ref}
      className="relative bg-white dark:bg-dark-surface-high-medium rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default ModalBody;
