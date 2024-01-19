import React, { InputHTMLAttributes, useState } from "react";
import clsx from "clsx";
import Icon from "@/components/icons";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label: string;
  name: string;
  shadow?: boolean;
  error: string | undefined;
}
const classes = {
  root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded-md placeholder-[#B3B3B3] transition duration-200 ease-in-out bg-skin-fill border-skin-two focus:border-2  focus:outline-none focus:border-brand h-11 md:h-12",
};

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className = "block",
      inputClassName,
      label,
      name,
      error,
      shadow = false,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    const rootClassName = clsx(classes.root, inputClassName);

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block font-normal text-sm leading-none mb-3 cursor-pointer text-gray-800 text-opacity-70"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={name}
            name={name}
            type={show ? "text" : "password"}
            ref={ref}
            className={rootClassName}
            autoComplete="off"
            spellCheck="false"
            {...rest}
          />
          <label
            htmlFor={name}
            className="absolute end-4 top-5 -mt-2 text-skin-base text-opacity-30 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShow((prev) => !prev);
            }}
          >
            {show ? (
              <Icon name="eye-off" className="w-6 h-6 stroke-gray-400" />
            ) : (
              <Icon name="eye" className="w-6 h-6 stroke-gray-400" />
            )}
          </label>
        </div>
        {error && (
          <p className="my-2 text-light-source-error text-base text-opacity-70">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default PasswordInput;

PasswordInput.displayName = "PasswordInput";
