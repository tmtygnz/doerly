import React, { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: keyof typeof colorSelection;
  buttonPadding?: keyof typeof paddingSelection;
}

const colorSelection = {
  norm: "border-[#808080] bg-[#262626] hover:bg-[#2A2A2A] border",
  ghost: "hover:bg-[#404040]",
};

const paddingSelection = {
  norm: "py-2 px-4",
  box: "h-full px-2",
};

export const Button = ({
  className,
  children,
  buttonColor = "norm",
  buttonPadding = "norm",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`w-full rounded-xl font-semibold ${paddingSelection[buttonPadding]} ${colorSelection[buttonColor]} ${className}`}
    >
      {children}
    </button>
  );
};
