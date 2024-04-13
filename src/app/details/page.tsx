"use client";
import BankDetails from "@/components/kyc/bankDetails";
import KycDetails from "@/components/kyc/kycDetails";
import Navbar from "@/components/navbar";
import PrimaryButton from "@/components/primaryButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const Page = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [cookieValue, setCookieValue] = useState("");

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

  useEffect(() => {
    getCookieValue();
  }, []);

  const handleNext = () => {
    if (currentComponent < 1) {
      setCurrentComponent(currentComponent + 1);

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
  };

  const handleDecrement = () => {
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1);
    }
  };
  interface submitKYCProps {
    documentType: string;
    documentUpload: string;
  }

  const submitKYC = async (props: submitKYCProps) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/kyc`,
        props,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${cookieValue}`,
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Error submitting KYC:", error);
    }
  };

  const handleSubmit = () => {
    submitKYC({documentType: "", documentUpload: ""});
  };

  return (
    <div>
      <Navbar />
      <div className="h-fit">
        {currentComponent === 0 ? <KycDetails /> : <BankDetails />}
      </div>
      <div className="flex flex-row gap-4 w-screen justify-center mt-8">
        {currentComponent === 0 ? (
          <>
            <PrimaryButton label="Next" onClick={handleNext} />
          </>
        ) : (
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
