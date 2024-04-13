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
import toast from "react-hot-toast";

const Page = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
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

  const handleNext = () => {
    if (currentComponent < 1) {
      const documentTypeElement = document.getElementById(
        "documentType"
      ) as HTMLInputElement;

      const documentUploadElement = document.getElementById(
        "documentUpload"
      ) as HTMLInputElement;

      if (documentTypeElement && documentUploadElement) {
        const documentType = documentTypeElement.value;
        const documentUpload = documentUploadElement.value;
        const kycData = {
          documentType,
          documentUpload,
        };
        localStorage.setItem("kycData", JSON.stringify(kycData));
      }
    }
    setCurrentComponent(currentComponent + 1);
  };

  const handleDecrement = () => {
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1);
    }
  };

  const submitKYC = async () => {
    getCookieValue();
    console.log("BKL COOKIE:",cookieValue)
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
    setCurrentComponent(currentComponent + 1);
  };

  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <div className="">
        {currentComponent === 0 && <KycDetails />}
        {currentComponent === 1 && <StoreHome />}
        {currentComponent === 2 && <Page1 />}
        {currentComponent === 3 && <Page2 />}
        {currentComponent === 4 && <Page3 />}
        {currentComponent === 5 && <BankDetails />}
      </div>
      <div className="flex flex-row gap-4 w-screen items-center justify-between px-8 bottom-10 absolute">
        {currentComponent === 0 && (
          <div className="absolute bottom-0 right-8">
            <PrimaryButton label="Submit" onClick={handleSubmit} />
          </div>
        )}
        {currentComponent === 1 && (
          <div className="absolute bottom-0 right-8">
            <PrimaryButton label="Get Started" onClick={handleNext} />
          </div>
        )}
        {currentComponent === 2 && (
          <div className="absolute bottom-0 right-8">
            <PrimaryButton label="Next" onClick={handleNext} />
          </div>
        )}
        {currentComponent === 4 && (
          <div className="absolute bottom-0 right-8">
            <PrimaryButton label="Skip" onClick={handleNext} />
          </div>
        )}
        {currentComponent != 0 &&
          currentComponent != 1 &&
          currentComponent != 5 && (
            <>
              <PrimaryButton label="Prev" onClick={handleDecrement} />
              <PrimaryButton label="Next" onClick={handleNext} />
            </>
          )}
        {currentComponent === 5 && (
          <>
            <PrimaryButton label="Prev" onClick={handleDecrement} />
            <PrimaryButton label="Submit" onClick={handleSubmit} />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
