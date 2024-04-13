import React, { useEffect, useState } from "react";

const BankDetails = () => {
  const [beneficiaryName, setBeneficiaryName] = useState<string>("");
  const [ifscCode, setIfscCode] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");

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

  return (
    <>
      <div className="mx-auto items-start flex flex-col mt-8 w-[80vw] h-fit justify-around">
        <h1 className="self-start text-3xl ">Bank Details</h1>
        <div className="items-center flex flex-col">
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Beneficiary Name</p>
            <input
              className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={beneficiaryName}
              placeholder="Enter Beneficiary Name"
              onChange={handleBeneficiaryNameChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">IFSC Code</p>
            <input
              className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={ifscCode}
              placeholder="XXXXXXXXXXX"
              onChange={handleIfscCodeChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Account Number</p>
            <input
              className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={accountNumber}
              placeholder="0000000000"
              onChange={handleAccountNumberChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Branch</p>
            <input
              className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={branch}
              placeholder="Enter Branch"
              onChange={handleBranchChange}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Bank Name</p>
            <input
              className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              value={bankName}
              placeholder="Enter Bank Name"
              onChange={handleBankNameChange}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
