"use client";
import { useRouter } from "next/navigation";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const { userId } = useAuth();
  const router = useRouter();

  const handleSignIn = () => {
    if (userId) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  const handleSignOut = () => {
    if (userId) {
      router.push("/dashboard");
    } else {
      router.push("/sign-up");
    }
  };

  useEffect(() => {
    console.log(userId);
  }, []);
  return (
    <>
      <h1>Home Page </h1>
      <h1>TradePulse</h1>
      <div className="flex gap-10">
        <button
          onClick={handleSignIn}
          className="border-2 border-black rounded-md px-2 py-1"
        >
          Sign In
        </button>
        <button
          onClick={handleSignOut}
          className="border-2 border-black rounded-md px-2 py-1"
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
