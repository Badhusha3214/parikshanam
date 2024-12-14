import { cn } from "@/app/utils/cn";
import React from "react";

const variants = {
  primary: "bg-black text-white hover:opacity-90 ",
  secondary: "text-fontColor-subtle hover:opacity:90,",
};

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  onClick,
  label,
  className,
  icon: Icon,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  children,
}) => {
  const baseStyles =
    "font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      )}
    >
      {Icon && (
        <Icon className={cn("w-4 h-4", label || children ? "mr-2" : "")} />
      )}
      {label || children}
    </button>
  );
};

export default Button;
