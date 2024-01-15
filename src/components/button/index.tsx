import clsx from "clsx";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { ImSpinner2 } from "react-icons/im";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "border" | "formButton";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  square?: boolean;
  rounded?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "primary",
    children,
    active,
    loading = false,
    disabled = false,
    size = "md",
    square = false,
    rounded = false,
    ...rest
  } = props;

  const rootClassName = clsx(
    "group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-normal text-center justify-center tracking-[0.2px] placeholder-white focus-visible:outline-none focus:outline-none",
    {
      "bg-brand text-white tracking-widest hover:text-white hover:bg-brand-dark":
        variant === "primary",
      "bg-skin-inverted text-skin-base border border-skin-four tracking-widest hover:bg-brand hover:text-white hover:border-brand":
        variant === "border",
      "bg-skin-primary text-skin-inverted hover:text-white hover:bg-opacity-90 focus:bg-opacity-70":
        variant === "formButton",
      "cursor-not-allowed hover:cursor-not-allowed bg-opacity-50 hover:bg-opacity-50":
        disabled,
      "h-10": size === "sm",
      "h-12": size === "md",
      "h-14": size === "lg",
      "w-10": square && size === "sm",
      "w-12": square && size === "md",
      "w-14": square && size === "lg",
      "px-5 py-3": !square,
      "rounded-full": !!rounded,
      rounded: !rounded,
    },
    className
  );

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
      {loading && <ImSpinner2 className="w-5 h-5 animate-spin -me-1 ms-3 " />}
    </button>
  );
});

export default Button;
