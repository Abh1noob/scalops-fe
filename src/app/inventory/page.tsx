"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import axios from "axios";
import CatalogueCard from "@/components/catalogueCard";
import PrimaryButton from "@/components/primaryButton";
import toast from "react-hot-toast";

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

  const [formData, setFormData] = useState({
    name: "",
    file: null as File | null,
    description: "",
    price: "",
    quantity: "",
    barcode: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, file, description, price, quantity, barcode } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("file", file!);
    formDataToSend.append("description", description);
    formDataToSend.append("price", price);
    formDataToSend.append("quantity", quantity);
    formDataToSend.append("barcode", barcode);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/product`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("speakData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCatalogueData(parsedData);
    }
  }, []);

  useEffect(() => {
    const getKYCStatus = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching KYC status:", error);
      }
    };
    getKYCStatus();
  }, []);

  const handleSaveToLocalStorage = (
    item: string,
    price: number,
    quantity: number
  ) => {
    if (catalogueData) {
      const updatedData = {
        ...catalogueData,
        data: {
          ...catalogueData.data,
          [item]: { price, quantity },
        },
      };
      localStorage.setItem("speakData", JSON.stringify(updatedData));
      setCatalogueData(updatedData);
    }
  };

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
                // onSave={handleSaveToLocalStorage}
              />
            ))}
          </div>
        )}
        <div className="flex w-full items-center justify-center mt-8">
          <PrimaryButton label="Submit" onClick={() => {
            toast.loading("Loading....")
            setTimeout(()=>{
              toast.dismiss();
              toast.success("Data Updated!");
            },2000)
          }} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
