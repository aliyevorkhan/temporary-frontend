"use client";

import Button from "@/components/form/button";
import Input from "@/components/form/input";
import PasswordInput from "@/components/form/input/PasswordInput";
import { RegisterBody, registerService } from "@/services/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

type RegisterFormProps = {
  onLoginClick?: () => void;
  onRegisterSuccess: () => void;
};

export type RegisterInputs = RegisterBody & {
  remember_me: boolean;
};

const RegisterForm = ({ onLoginClick, onRegisterSuccess }: RegisterFormProps) => {
  const [remember, setRemember] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const { mutate, isLoading } = useMutation(
    (values: RegisterInputs) => registerService(values),
    {
      onSuccess: (data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        onRegisterSuccess();
      },
      onError: (data) => {
        console.log(data, "login error response");
      },
    }
  );

  const onSubmit = ({
    email,
    password1,
    password2,
    remember_me,
  }: RegisterInputs) => {
    mutate({
      email,
      password1,
      password2,
      remember_me,
    });
  };

  return (
    <div className="'flex bg-skin-fill mx-auto rounded-lg">
      <div className="flex w-full mx-auto overflow-hidden rounded-lg bg-skin-fill">
        <div className="md:w-[55%] xl:w-[60%] hidden md:block relative">
          <Image
            className="object-cover w-full h-full"
            src="/images/login.jpg"
            alt="sign up"
            layout="fill"
          />
        </div>
        <div className="w-full md:w-[45%] xl:w-[40%] py-6 sm:py-10 px-4 sm:px-8 lg:px-12  rounded-md shadow-dropDown flex flex-col justify-center">
          <div className="text-center mb-6 pt-2.5">
            <h4 className="text-xl font-normal text-skin-base sm:text-2xl sm:pt-3 ">
              Ödənişsiz qeydiyyatdan keçin!
            </h4>
            <div className="text-sm mt-3 mb-1 flex gap-1 justify-center text-center sm:text-15px text-body">
              <span>Artıq hesabınız var?</span>
              <button
                type="button"
                className="text-brand underline hover:no-underline focus:outline-none font-light"
                onClick={(e) => {
                  onLoginClick?.();
                }}
              >
                Daxil olun
              </button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center"
            noValidate
          >
            <div className="flex flex-col space-y-4">
              <Input
                label={"Email"}
                type="email"
                variant="solid"
                {...register("email", {
                  required: `Email is required`,
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is incorrect",
                  },
                })}
                error={errors.email?.message}
              />
              <PasswordInput
                label={"Password"}
                error={errors.password1?.message}
                {...register("password1", {
                  required: `Password is required`,
                })}
              />
              <PasswordInput
                label={"Confirm Password"}
                error={errors.password2?.message}
                {...register("password2", {
                  required: `Password is required`,
                })}
              />
              <div className="relative">
                <Button
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  className="w-full mt-2 tracking-normal h-11 md:h-12 font-15px md:font-15px"
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
