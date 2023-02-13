import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Navbar } from "../Navbar";

export const LandingComponent = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col justify-center pl-36 text-black">
        <div className="flex flex-col gap-2">
          <div className="underline-green-500 flex flex-col underline decoration-[#F57A9B]">
            <span className="text-9xl font-bold">Inspiring Action.</span>
            <span className="text-6xl font-bold">Changing Lives.</span>
          </div>
          <span className="w-96 text-xl font-medium">
            Doerly is a platform that connects individuals with opportunities to
            make a positive impact through meaningful volunteer work.
          </span>
          <div className="flex gap-3">
            <Button>Create</Button>
            <Button buttonColor="black" onClick={() => router.push("./search")}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
