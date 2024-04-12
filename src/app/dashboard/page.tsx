"use client";
import Navbar from "@/components/navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

interface KYCStatus {
  status: string;
  message: string;
  data: {
    kyc: string;
  };
}

const Dashboard = () => {
  const [kycStatus, setKYCStatus] = useState<KYCStatus | null>(null);
  const [cookieValue, setCookieValue] = useState("");

  const router = useRouter();

  const getKYCStatus = async () => {
    try {
      const resp = await axios.get<KYCStatus>(
        `${process.env.NEXT_PUBLIC_APIURL}/test`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${cookieValue}`,
          },
          withCredentials: true,
        }
      );
      setKYCStatus(resp.data);
    } catch (error) {
      console.error("Error fetching KYC status:", error);
    }
  };

  const getInitialValue = async () => {
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
    getInitialValue();
  }, []);

  // useEffect(() => {
  //   if (kycStatus) {
  //     switch (kycStatus.data.kyc) {
  //       case "pending":
  //         router.push("/pending");
  //         break;
  //       case "approved":
  //         router.push("/approved");
  //         break;
  //       default:
  //         router.push("/");
  //         break;
  //     }
  //   }
  // }, [kycStatus, router]);

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={getKYCStatus}>Fetch KYC Status</button>
        <button onClick={getInitialValue}>lmao</button>
      </div>
    </div>
  );
};

export default Dashboard;
