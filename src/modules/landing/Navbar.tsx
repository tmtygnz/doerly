import React from "react";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

export const Navbar = () => {
  return (
    <div className="fixed w-full py-5 px-10">
      <div className="w-sc flex w-full justify-between rounded-full border bg-white transition duration-500 hover:shadow-xl border-black">
        <div className="flex w-full items-center justify-between p-1">
          <span className="font-serif font-black ml-2">DOERLY</span>
          <div className="flex items-center gap-6">
            <Button buttonColor="ghost">Search</Button>
            <Button buttonColor="ghost">About</Button>
            <Button buttonColor="ghost">FAQ</Button>
            <Button buttonColor="ghost">Sign In</Button>
            <Button
              buttonColor="ghost"
              className="rounded-full bg-black text-white hover:bg-black hover:bg-opacity-80"
            >
              Create your own
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
