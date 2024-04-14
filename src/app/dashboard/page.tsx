"use client";
import Navbar from "@/components/navbar";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import PrimaryButton from "@/components/primaryButton";
import ProductCard from "@/components/productCard";

interface KYCStatus {
  status: string;
  message: string;
  data: {
    status: string;
  };
}

const Dashboard = () => {
  const [kycStatus, setKYCStatus] = useState<KYCStatus | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getKYCStatus = async () => {
      try {
        const resp = await axios.get<KYCStatus>(
          `${process.env.NEXT_PUBLIC_APIURL}/kyc/status`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setKYCStatus(resp.data);
        console.log(resp.data.data.status);

        switch (resp.data.data.status) {
          case "PENDING":
            toast.error("KYC Approval Pending");
            break;
          case "REJECTED":
            toast.error("KYC Rejected");
            break;
          default:
            break;
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response && axiosError.response.status === 404) {
            router.push("/details");
          } else {
            console.error("Error:", axiosError);
          }
        } else {
          console.error("Error:", error);
          toast.error(`Error: ${error}`);
        }
      }
    };

    getKYCStatus();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="m-8 ">
        <h1 className="my-4 text-3xl text-[#211A1D]">Overview</h1>
        <div className="bg-[#211A1D] w-full h-fit py-4 flex flex-row text-white justify-evenly rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">5324</p>
            <p className="text-[12px] mt-1">Products Sold</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">5324</p>
            <p className="text-[12px] mt-1">Products Sold</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">174K</p>
            <p className="text-[12px] mt-1">Total Earnings</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between my-8">
          <Image
            src="/placeholder1.png"
            alt="graph1"
            height={0}
            width={0}
            className="w-[35vw] h-[35vw] border-2 border-black rounded-lg"
          />
          <Image
            src="/placeholder2.png"
            alt="graph1"
            height={0}
            width={0}
            className="w-[35vw] h-[35vw] border-2 border-black rounded-lg"
          />
        </div>
        <div
          className="bg-[#8075FF] text-white font-montserrat h-12 w-full flex items-center justify-center rounded-[20px] p-2 font-medium text-lg"
          onClick={() => {}}
        >
          View full performance report
        </div>

        <div
          className="bg-[#8075FF] text-white font-montserrat h-12 w-full flex items-center justify-center rounded-[20px] p-2 font-medium text-lg mt-6"
          onClick={() => {
            router.push("/catalogue");
          }}
        >
          Catalogue Update
        </div>
        <h1 className="my-4 text-3xl text-[#211A1D] mt-10">Popular Products</h1>
        <div className="flex-row flex flex-wrap justify-between ">
          <ProductCard item={"Product 1"} price={999} quantity={10} />
          <ProductCard item={"Product 2"} price={799} quantity={20} />
          <ProductCard item={"Product 3"} price={20} quantity={18} />
          <ProductCard item={"Product 4"} price={599} quantity={5} />
          <ProductCard item={"Product 5"} price={99} quantity={2} />
          <ProductCard item={"Product 6"} price={29} quantity={82} />
          <div className=" mx-auto my-6">
            <PrimaryButton
              label="View all products"
              onClick={() => router.push("/inventory")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
