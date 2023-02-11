import React from "react";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Navbar } from "./Navbar";

export const LandingComponent = () => {
  return (
    <div className="h-screen flex-col">
      <Navbar />
      <div className="flex h-screen flex-col justify-center bg-[#F7F7F7] pl-36 text-black">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-7xl font-bold">Inspiring Action.</span>
            <span className="text-4xl font-bold">Changing Lives.</span>
          </div>
          <span className="w-96 text-lg font-medium">
            Doerly is a platform that connects individuals with opportunities to
            make a positive impact through meaningful volunteer work.
          </span>
          <div className="flex gap-3">
          <Button>Create</Button>
            <Button buttonColor="black">Search</Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};
