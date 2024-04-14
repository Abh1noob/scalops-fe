import { usePageCountStore } from "@/store/store";
import React, { useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import PrimaryButton from "../primaryButton";
import { useRouter } from "next/navigation";

const BankDetails = () => {
  const [beneficiaryName, setBeneficiaryName] = useState<string>("");
  const [ifscCode, setIfscCode] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");
  const { pageCount, setPageCount } = usePageCountStore();

  const router = useRouter();
  const handlePrev = () => {
    setPageCount(pageCount - 1);
  };

  useEffect(() => {
    const storedBeneficiaryName = localStorage.getItem("beneficiaryName") || "";
    const storedIfscCode = localStorage.getItem("ifscCode") || "";
    const storedAccountNumber = localStorage.getItem("accountNumber") || "";
    const storedBranch = localStorage.getItem("branch") || "";
    const storedBankName = localStorage.getItem("bankName") || "";

    setBeneficiaryName(storedBeneficiaryName);
    setIfscCode(storedIfscCode);
    setAccountNumber(storedAccountNumber);
    setBranch(storedBranch);
    setBankName(storedBankName);
  }, []);

  const handleBeneficiaryNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newName = event.target.value;
    setBeneficiaryName(newName);
    localStorage.setItem("beneficiaryName", newName);
  };

  const handleIfscCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIfscCode = event.target.value;
    setIfscCode(newIfscCode);
    localStorage.setItem("ifscCode", newIfscCode);
  };

  const handleAccountNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newAccountNumber = event.target.value;
    setAccountNumber(newAccountNumber);
    localStorage.setItem("accountNumber", newAccountNumber);
  };

  const handleBranchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBranch = event.target.value;
    setBranch(newBranch);
    localStorage.setItem("branch", newBranch);
  };

  const handleBankNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBankName = event.target.value;
    setBankName(newBankName);
    localStorage.setItem("bankName", newBankName);
  };

  const handleSubmit = () =>{
    router.push("/dashboard")
  }

  return (
    <>
      <div className="mx-auto items-start flex flex-col mt-8 w-[80vw] h-fit justify-around">
        <div className="flex flex-row justify-between items-center w-full">
          <RiArrowLeftSLine
            size={30}
            className="opacity-50 -mx-2"
            onClick={handlePrev}
          />
          <div className="flex flex-row gap-2">
            <div>4/4</div>
            <div className="font-montserrat">Store Creation</div>
          </div>
          <RiArrowRightSLine size={30} className="opacity-0 -mx-2" />
        </div>
        <h1 className="self-start text-3xl mt-6">Bank Details</h1>
        <div className="items-center flex flex-col">
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Beneficiary Name</p>
            <input
              className="h-12 w-[80vw] placeholder:text-[12px] bg-white rounded-lg p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={beneficiaryName}
              placeholder="Enter Beneficiary Name"
              onChange={handleBeneficiaryNameChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">IFSC Code</p>
            <input
              className="h-12 w-[80vw] placeholder:text-[12px] bg-white rounded-lg p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={ifscCode}
              placeholder="XXXXXXXXXXX"
              onChange={handleIfscCodeChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Account Number</p>
            <input
              className="h-12 w-[80vw] placeholder:text-[12px] bg-white rounded-lg p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={accountNumber}
              placeholder="0000000000"
              onChange={handleAccountNumberChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Branch</p>
            <input
              className="h-12 w-[80vw] placeholder:text-[12px] bg-white rounded-lg p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={branch}
              placeholder="Enter Branch"
              onChange={handleBranchChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Bank Name</p>
            <input
              className="h-12 w-[80vw] placeholder:text-[12px] bg-white rounded-lg p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={bankName}
              placeholder="Enter Bank Name"
              onChange={handleBankNameChange}
            ></input>
          </div>

          <div className="my-2">
            <PrimaryButton label="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
