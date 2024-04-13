import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-screen min-h-[8vh] bg-[#8075FF] rounded-b-[40px] flex items-center justify-center">
      <div className="flex justify-end w-[90vw] items-center">
        <div className="absolute flex items-center justify-center w-[90vw]">
          <p className="h-12 w-12 border-2 border-black flex items-center justify-center">
            logo
          </p>
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
