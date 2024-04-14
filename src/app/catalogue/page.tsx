"use client";
import AddItem from "@/components/addItem";
import Navbar from "@/components/navbar";
import PrimaryButton from "@/components/primaryButton";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="m-8">
        <AddItem />
        <div className="flex justify-center mt-6">
          <PrimaryButton
            label="Go to Inventory"
            onClick={() => {
              router.push("/inventory");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
