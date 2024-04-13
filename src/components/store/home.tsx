"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import details1 from "../../../public/assets/images/details/details1.svg";
import PrimaryButton from "../primaryButton";

const StoreHome = () => {
  const [userName, setUserName] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const fetchUsername = async () => {
      setUserName(user!.firstName!);
    };
    fetchUsername();
  }, []);

  return (
    <div className="">
      <h1 className="text-center my-6 text-3xl text-[#211A1D]">
        Welcome {userName}
      </h1>
      <Image
        src={details1}
        alt="details1"
        width={0}
        height={0}
        className="w-screen h-auto top-[20vh] absolute"
      />
      <div className="flex w-screen mx-auto justify-center top-[60vh] absolute z-50 flex-col">
        <div className="mx-5 flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl
           my-6">
            Let&apos;s create your store.
          </h1>
          <p className="text-[#211A1D] text-center font-montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
            blandit elit, in ligula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreHome;
