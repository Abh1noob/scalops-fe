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

  // useEffect(() => {
  //   const getCookieValue = async () => {
  //     try {
  //       const cookie = getCookie("__session");
  //       if (typeof cookie === "string") {
  //         setCookieValue(cookie);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching cookie:", error);
  //     }
  //   };

  //   const getKYCStatus = async () => {
  //     try {
  //       const resp = await axios.get<KYCStatus>(
  //         `${process.env.NEXT_PUBLIC_APIURL}/test`,
  //         {
  //           headers: {
  //             "ngrok-skip-browser-warning": "true",
  //             Authorization: `Bearer ${cookieValue}`,
  //           },
  //           withCredentials: true,
  //         }
  //       );
  //       setKYCStatus(resp.data);
  //     } catch (error) {
  //       console.error("Error fetching KYC status:", error);
  //     }
  //   };
  //   getKYCStatus();
  //   getCookieValue();
  // }, []);

  return (
    <div>
      <Navbar />
      Dashboard
    </div>
  );
};

export default Dashboard;
