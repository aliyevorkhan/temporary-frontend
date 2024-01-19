"use client";

import { useForm } from "react-hook-form";
import { User } from "@/services/user";
import Input from "@/components/form/input";
import Button from "@/components/form/button";

type Props = {
  user: User;
};

const AccountDetailsForm = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }>({
    defaultValues: {
      email: user?.email,
    },
  });

  const onSubmit = () => {
    //TODO: Update user
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center w-full mx-auto"
      noValidate
    >
      <div className="border-b border-skin-base pb-7 md:pb-8 lg:pb-10">
        <div className="flex flex-col space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
            <Input
              label="Ad*"
              {...register("firstName", {
                required: "forms:first-name-required",
              })}
              variant="solid"
              className="w-full sm:w-1/2 px-1.5 md:px-2.5"
              error={errors.firstName?.message}
            />
            <Input
              label="Soyad*"
              {...register("lastName", {
                required: "forms:last-name-required",
              })}
              variant="solid"
              className="w-full sm:w-1/2 px-1.5 md:px-2.5"
              error={errors.lastName?.message}
            />
          </div>
          <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
            <Input
              type="tel"
              label="Telefon/Mobil*"
              {...register("phoneNumber", {
                required: "forms:phone-required",
              })}
              variant="solid"
              className="w-full sm:w-1/2 px-1.5 md:px-2.5"
              error={errors.phoneNumber?.message}
            />
          </div>
        </div>
      </div>
      <h2 className="my-7 font-medium text-2xl">Account Information</h2>
      <div className="border-b border-skin-base pb-7 md:pb-9 lg:pb-10">
        <div className="flex flex-col space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
            <Input
              disabled
              type="email"
              label="E-poçt*"
              {...register("email", {
                required: "forms:email-required",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "forms:email-error",
                },
              })}
              variant="solid"
              className="w-full sm:w-1/2 px-1.5 md:px-2.5"
              error={errors.email?.message}
            />
          </div>
        </div>
      </div>
      <div className="relative flex pb-2 mt-5 sm:ms-auto lg:pb-0">
        <Button
          type="submit"
          loading={false}
          disabled={false}
          className="w-full sm:w-auto"
        >
          Save changes
        </Button>
      </div>
    </form>
  );
};

export default AccountDetailsForm;
