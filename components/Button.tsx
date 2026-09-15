import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors";
  const variantStyles = {
    primary: "bg-espresso text-warm-paper hover:bg-espresso/90",
    secondary: "bg-warm-paper text-espresso border border-espresso hover:bg-soft-sand",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
