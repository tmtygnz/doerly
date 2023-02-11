import React, { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: keyof typeof colorSelection;
  buttonPadding?: keyof typeof paddingSelection;
}

const colorSelection = {
  white: "bg-white border border-black text-black",
  black: "bg-black border border-white text-white",
  ghost: "hover:bg-gray-50",
};

const paddingSelection = {
  norm: "py-1 px-4",
  box: "h-full px-2",
};

export const Button = ({
  className,
  children,
  buttonColor = "white",
  buttonPadding = "norm",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`rounded-full font-medium ${paddingSelection[buttonPadding]} ${colorSelection[buttonColor]} ${className}`}
    >
      {children}
    </button>
  );
};
