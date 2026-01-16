import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon?: ReactNode;
  iconPos?: "before" | "after";
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  icon,
  iconPos = "before",
  variant = "primary",
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx([
        className,
        "inline-block w-full md:size-max px-6 py-4 rounded-xl text-black text-xl font-bold",
        variant === "primary"
          ? "bg-linear-to-l from-primary-dark to-primary"
          : "text-primary outline",
        variant === "primary" &&
          "transition-all ease-in-out duration-150 hover:scale-105",
      ])}
    >
      {iconPos === "before" && icon} {children} {iconPos === "after" && icon}
    </button>
  );
};

export default Button;
