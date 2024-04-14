"use client";
import BankDetails from "@/components/kyc/bankDetails";
import KycDetails from "@/components/kyc/kycDetails";
import Navbar from "@/components/navbar";
import PrimaryButton from "@/components/primaryButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import StoreHome from "@/components/store/home";
import Page1 from "@/components/store/page1";
import Page2 from "@/components/store/page2";
import Page3 from "@/components/store/page3";
import { useRouter } from "next/navigation";
import { usePageCountStore } from "@/store/store";

const Page = () => {
  const { pageCount, setPageCount } = usePageCountStore();
  const [cookieValue, setCookieValue] = useState("");
  const router = useRouter();

  const getCookieValue = async () => {
    try {
      const cookie = getCookie("__session");
      if (typeof cookie === "string") {
        setCookieValue(cookie);
      }
    } catch (error) {
      console.error("Error fetching cookie:", error);
    }
  };

  const submitKYC = async () => {
    getCookieValue();
    console.log("BKL COOKIE:", cookieValue);
    const documentTypeElement = document.getElementById(
      "documentType"
    ) as HTMLInputElement;

    const documentUploadElement = document.getElementById(
      "documentUpload"
    ) as HTMLInputElement;

    if (!documentTypeElement || !documentUploadElement) {
      throw new Error("Document type or upload element not found");
    }

    const documentType = documentTypeElement.value;
    const documentFile = documentUploadElement.files![0];

    if (!documentFile) {
      throw new Error("No file uploaded");
    }

    const formData = new FormData();
    formData.append("type", documentType);
    formData.append("file", documentFile);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APIURL}/kyc`,
      formData,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: `Bearer ${cookieValue}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const handleSubmit = () => {
    // toast.promise(submitKYC(), {
    //   loading: "Loading...",
    //   success: "Success!",
    //   error: "Error!",
    // });
    setPageCount(pageCount + 1);
  };

  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <div className="">
        {pageCount === 0 && <KycDetails />}
        {pageCount === 1 && <StoreHome />}
        {pageCount === 2 && <Page1 />}
        {pageCount === 3 && <Page2 />}
        {pageCount === 4 && <Page3 />}
        {pageCount === 5 && <BankDetails />}
      </div>
      <div className="flex flex-row gap-4 w-screen items-center justify-between px-8 bottom-10 absolute"></div>
    </div>
  );
};

export default Page;
