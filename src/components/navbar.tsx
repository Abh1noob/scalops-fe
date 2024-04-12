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
    <div className="w-screen h-[10%] bg-blue-200">
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Navbar;
