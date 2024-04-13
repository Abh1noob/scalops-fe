"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import image1 from "../../public/assets/images/root/home.svg";

export default function Home() {
  const router = useRouter();
  
  const handleSignUp = () => {};
  const handleSignIn = () => {};

  return (
    <>
      <Navbar />
      <div className="w-[90vw] mx-auto">
        <h1 className="self-start text-3xl  text-[#211A1D] my-6">
          Grow With Us
        </h1>
        <h6 className="self-start text-base text-[#211A1D]">
          ONDC Sellers platform which will break market like he broke yo mom
        </h6>
        <div className="flex gap-10 mt-8">
          <PrimaryButton label="Get Started" onClick={handleSignUp} />
          <PrimaryButton label="Sign In" onClick={handleSignIn} />
        </div>
        <Image
          src={image1}
          alt="image1"
          height={0}
          width={0}
          className="h-auto w-[890vw] mx-auto mt-8"
        />
      </div>
    </>
  );
}
