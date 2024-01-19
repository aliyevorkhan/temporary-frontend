import Button from "@/components/form/button";
import Input from "@/components/form/input";
import PasswordInput from "@/components/form/input/PasswordInput";
import { useAuth } from "@/providers/AuthProvider";
import { LoginBody, loginService } from "@/services/auth";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export type LoginInputs = LoginBody & {
  remember_me: boolean;
};

type Props = {
  onRegisterClick: () => void;
  onLoginSuccess: () => void;
};

const LoginForm = (props: Props) => {
  const { fetch } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const { mutate, isLoading } = useMutation(
    (input: LoginInputs) => loginService(input),
    {
      onSuccess: (data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        fetch();
        props.onLoginSuccess();
      },
      onError: (data) => {
        console.log(data, "login error response");
      },
    }
  );

  const onSubmit = ({ email, password, remember_me }: LoginInputs) => {
    mutate({
      email,
      password,
      remember_me,
    });
  };

  return (
    <div className="h-full relative">
      <div className="flex mx-auto overflow-hidden rounded-lg bg-skin-fill">
        <div className="md:w-[55%] lg:w-[60%] hidden md:block relative">
          <Image
            src="/images/login.jpg"
            alt="Login image"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="w-full md:w-[45%] xl:w-[40%] py-6 sm:py-10 px-4 sm:px-8 xl:px-12 flex flex-col justify-center">
          <div className="mb-6 text-center ">
            <h4 className="text-xl font-normal text-skin-base sm:text-2xl sm:pt-3 ">
              Hesabınıza daxil olun
            </h4>
            <div className="text-sm mt-3 mb-1 flex gap-1 justify-center text-center sm:text-15px text-body">
              <span className="font-light">Hesabınız yoxdur?</span>
              <button
                type="button"
                onClick={(e) => {
                  props.onRegisterClick();
                }}
                className="text-brand underline hover:no-underline focus:outline-none font-light"
              >
                Hesab yaradın
              </button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center"
            noValidate
          >
            <div className="flex flex-col space-y-3.5">
              <Input
                label="E-poçt"
                type="email"
                variant="solid"
                {...register("email", {
                  required: "E-poçt ünvanı daxil edin",
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "E-poçt ünvanı düzgün deyil",
                  },
                })}
                error={errors.email?.message}
              />
              <PasswordInput
                label="Şifrə"
                error={errors.password?.message}
                {...register("password", {
                  required: "Şifrə daxil edin",
                })}
              />
              <div className="flex items-center justify-center">
                <div className="flex ms-auto mt-[3px]">
                  <button
                    type="button"
                    onClick={console.log}
                    className="text-sm text-heading underline hover:no-underline hover:text-skin-base focus:outline-none focus:text-skin-base"
                  >
                    Şifrəni unutmusunuz?
                  </button>
                </div>
              </div>
              <div className="relative">
                <Button
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  variant="primary"
                  className="w-full"
                >
                  Daxil ol
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
