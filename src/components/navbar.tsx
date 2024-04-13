"use client";
import React from "react";
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Navbar = () => {

  return (
    <div className="w-screen min-h-[8vh] bg-[#8075FF] flex items-center justify-center">
      <div className="flex justify-end w-[90vw] items-center">
        <div className="absolute flex items-center justify-center w-[90vw]">
          <Image
            src={logo as HTMLImageElement}
            alt="logo"
            height={0}
            width={0}
            className="h-[10] w-fit mb-1"
          />
        </div>

        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
