import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Navbar } from "../Navbar";

export const SearchComponent = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#F57A9B] via-[#F7F7F7]">
      <Navbar />
      <div className="mt-36 flex w-full flex-col items-center justify-center gap-2">
        <div className="w-1/2">
          <div className="text-6xl font-bold w-[500px]">
            <span className="">Find opportunities or volunteer</span>
          </div>
        </div>
        <Input
          className=" w-1/2 rounded-full text-lg font-medium"
          placeholder="Search Doerly"
        />
      </div>
      <div className="p-36">
        <div className="flex items-center gap-3">
          <Button>Latest</Button>
          <Button>Most Viewed</Button>
          <Button>Oldest</Button>
        </div>
      </div>
    </div>
  );
};
