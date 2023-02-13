import React from "react";

export const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={` ${className} px-4 border  border-black bg-white py-1 text-black outline-none `}
      {...props}
    />
  );
};
