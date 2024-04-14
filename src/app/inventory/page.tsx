"use client";
import Navbar from "@/components/navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CatalogueCard from "@/components/catalogueCard";

interface KYCStatus {
  status: string;
  message: string;
  data: {
    kyc: string;
  };
}

const Inventory = () => {
  const [kycStatus, setKYCStatus] = useState<KYCStatus | null>(null);
  const [catalogueData, setCatalogueData] = useState<{
    status: string;
    message: string;
    data: { [key: string]: { price: number; quantity: number } };
  } | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("speakData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCatalogueData(parsedData);
    }
  }, []);
  const router = useRouter();

  useEffect(() => {
    const getKYCStatus = async () => {
      const resp = await axios.get<KYCStatus>(
        `${process.env.NEXT_PUBLIC_APIURL}/kyc/status`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          withCredentials: true,
        }
      );
      setKYCStatus(resp.data);
      console.log(kycStatus);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="m-8 ">
        <h1 className="my-4 text-3xl text-[#211A1D]">Inventory</h1>
        {catalogueData && (
          <div>
            {Object.entries(catalogueData.data).map(([item, details]) => (
              <CatalogueCard
                key={item}
                item={item}
                price={details.price}
                quantity={details.quantity}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
