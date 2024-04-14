"use client";
import Navbar from "@/components/navbar";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegUser, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitFunction = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APIURL}/auth/sign-up`,
      {
        email: email,
        password: password,
      }
    );
  };
  const handleSubmit = async () => {
    toast.loading("Loading...");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/auth/sign-up`,
        {
          email: email,
          password: password,
        }
      );
      toast.dismiss();
      toast.success("Success!");
      window.location.href = "/signin";
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        toast.dismiss();
        toast.error(`Error: ${error.response.status}`);
      } else {
        toast.dismiss();
        toast.error(`Error: ${error}`);
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="m-8">
        <div className="bg-white rounded-xl p-5">
          <h1 className="self-start text-3xl  text-[#211A1D] mt-6">
            Create an account
          </h1>
          <h6 className="self-start text-base  text-[#211A1D]/70 mb-6">
            to continue to ScaleOps
          </h6>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full items-center justify-center">
              <div className="h-12 w-[15%] text-xl bg-white rounded-l-lg border-l-2 border-y-2 border-gray-200 placeholder-[#211a1d80] flex items-center justify-center">
                <FaRegUser />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-[85%] focus:outline-none placeholder:text-[14px] bg-white rounded-r-lg  border-r-2 border-y-2 border-gray-200 placeholder-[#211a1d80]"
                placeholder="Email"
              ></input>
            </div>

            <div className="flex flex-row w-full items-center justify-center">
              <div className="h-12 w-[15%] text-xl bg-white rounded-l-lg border-l-2 border-y-2 border-gray-200 placeholder-[#211a1d80] flex items-center justify-center">
                <FaRegUser />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-[85%] focus:outline-none placeholder:text-[14px] bg-white border-y-2 border-gray-200 placeholder-[#211a1d80]"
                placeholder="Password"
              ></input>

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-400 hover:text-gray-600 focus:outline-none rounded-r-lg border-r-2 border-y-2 h-12 pr-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div
              className="bg-[#8075FF] text-white font-montserrat h-10 w-full flex items-center justify-center rounded-[20px] p-2 font-medium text-sm cursor-pointer"
              onClick={handleSubmit}
            >
              Continue
            </div>
            <div>
              Already have an account?{" "}
              <a className="text-[#8075FF]" href="/signin">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
