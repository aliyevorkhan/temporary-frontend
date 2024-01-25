import Button from "@/components/form/button";
import Icon from "@/components/icons";
import Modal from "@/components/modal";
import useSearchParams from "@/hooks/useSearchParams";
import { registerConfirm } from "@/services/auth";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

const AccountConfirmation = () => {
  const { searchParams } = useSearchParams();
  const registerToken = searchParams.get("register-token");

  const [showModal, setShowModal] = useState(false);

  const { mutate } = useMutation(registerConfirm, {
    onSuccess: () => {
      setShowModal(true);
    },
  });

  useEffect(() => {
    if (registerToken) {
      mutate(registerToken);
    }
  }, [registerToken, mutate]);

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <div className="bg-white w-[714px] h-[522px] relative flex flex-col items-center justify-center">
        <button className="absolute top-6 right-6">
          <Icon name="close" className="" />
        </button>

        <div className="mb-[44px]">
          <Icon name="check" />
        </div>

        <h2 className="text-3xl font-semibold mb-[14px]">Təbriklər!</h2>

        <div className="mb-[44px]">
          <span className="text-[#9597AB] text-lg">
            Siz hesabı uğurla təsdiqlədiniz.
          </span>
        </div>

        <Button className="w-[340px]">Davam et</Button>
      </div>
    </Modal>
  );
};

export default AccountConfirmation;
