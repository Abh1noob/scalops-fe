"use client";
import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="w-screen min-h-[8vh] bg-[#8075FF] rounded-b-[40px] flex items-center justify-center">
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
