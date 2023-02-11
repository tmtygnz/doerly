import React from "react";

export const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="border-emdark-brdr bg-emdark-acc hover:bg-emdark-hvr rounded-xl border px-2 outline-none"
      {...props}
    />
  );
};
