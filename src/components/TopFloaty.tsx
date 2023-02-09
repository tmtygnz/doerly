import { Gear, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { Logo } from "./Logo";

export const TopFloaty = () => {
  return (
    <div className="absolute left-3 top-3 right-3 z-10 flex justify-between">
      <div className="flex items-center gap-4 rounded-2xl border border-[#4C4C4C] bg-[#2C2C2C]  p-3 text-white ">
        <Logo />
        <span className="text-lg font-bold">Doerly</span>
      </div>
      <div className="flex items-center gap-7 rounded-2xl border border-[#4C4C4C] bg-[#2C2C2C] p-3  px-4 text-white ">
        <MagnifyingGlass size={22} />
        <Gear size={22} />
      </div>
    </div>
  );
};

// const SideBarButton = ({
//   className,
//   children,
// }: {
//   className: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div className=" w-full rounded-lg border border-[#808080] bg-[#262626] px-1 py-1.5 font-semibold">
//       {children}
//     </div>
//   );
// };