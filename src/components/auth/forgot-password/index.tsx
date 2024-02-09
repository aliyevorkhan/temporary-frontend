import Button from "@/components/form/button";
import Input from "@/components/form/input";
import { passwordReset } from "@/services/auth";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

type FormValues = {
  email: string;
};

const ForgotPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  const { isLoading, mutate, data } = useMutation(passwordReset, {
    onSuccess: (data) => {
      setIsSent(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (values: FormValues) => {
    mutate(values.email);
  };

  return (
    <div className="w-full lg:w-[450px] p-8">
      <div className="flex justify-center mb-9 flex-col items-center">
        <Image src="/images/logo.png" alt="Logo" width={80} height={80} />

        {!isSent && (
          <div className="mt-4">
            <span className="text-sm md:text-base text-center inline-block font-normal">
              Sizə e-poçt ünvanınıza şifrənin bərpa edilməsi üçün bir link
              göndəriləcək
            </span>
          </div>
        )}
      </div>
      {isSent ? (
        <div>
          <span className="text-sm md:text-base text-center inline-block font-normal">
            E-poçt ünvanınıza şifrənin bərpa edilməsi üçün bir link göndərildi
          </span>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <div className="flex flex-col gap-4">
            <Input
              label="E-poçt ünvanı"
              type="email"
              variant="solid"
              error={errors.email?.message}
              {...register("email", {
                required: "E-poçt ünvanı mütləqdir",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "E-poçt ünvanı düzgün deyil",
                },
              })}
            />
            <Button
              loading={isLoading}
              type="submit"
              className="h-11 md:h-12 w-full mt-0"
            >
              Göndər
            </Button>
          </div>
        </form>
      )}
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
        <span className="absolute px-2 bg-skin-fill">Və ya</span>
      </div>
      <div className="flex gap-1 justify-center text-sm sm:text-15px text-skin-muted text-center">
        Hesabınız var?
        <button
          type="button"
          className="font-normal underline  hover:no-underline focus:outline-none"
        >
          Daxil olun
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
