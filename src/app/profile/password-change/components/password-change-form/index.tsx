"use client";

import Button from "@/components/form/button";
import PasswordInput from "@/components/form/input/PasswordInput";
import { ChangePasswordBody, changePasswordService } from "@/services/auth";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Bounce, toast } from "react-toastify";

const PasswordChangeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ChangePasswordBody>({
    defaultValues: {
      new_password1: "",
      new_password2: "",
    },
  });

  const { isLoading, mutate } = useMutation(changePasswordService, {
    onSuccess: (data) => {
      reset();

      toast.success("Şifrə uğurla dəyişildi", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    onError: (data: AxiosError<{ new_password2: string[] }>) => {
      if (data.response) {
        setError("new_password2", {
          message: data.response.data.new_password2[0],
        });
      }
    },
  });

  const onSubmit = (values: ChangePasswordBody) => {
    mutate(values);
  };

  return (
    <div className="w-full flex  h-full lg:w-10/12 2xl:w-9/12 flex-col mt-6 lg:mt-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center "
      >
        <div className="flex flex-col space-y-5 lg:space-y-7">
          <PasswordInput
            label="Yeni şifrə"
            error={errors.new_password1?.message}
            {...register("new_password1", {
              required: {
                value: true,
                message: "Yeni şifrəni daxil edin",
              },
            })}
          />
          <PasswordInput
            label="Yeni şifrə təkrarı"
            error={errors.new_password2?.message}
            {...register("new_password2", {
              required: {
                value: true,
                message: "Yeni şifrəninin təkrarını daxil edin",
              },
            })}
          />
          <div className="relative mt-3">
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              Şifrəni dəyiş
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordChangeForm;
