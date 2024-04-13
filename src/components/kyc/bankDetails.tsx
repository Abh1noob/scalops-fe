import React from "react";

const BankDetails = () => {
  return (
    <>
      <div className=" mx-auto items-start flex flex-col mt-8 w-[80vw] h-fit justify-around">
        <h1 className="self-start text-3xl font-semibold">Bank Details</h1>
        <div className="items-center flex flex-col ">
          <div className="my-2">
            <p className="text-[#8075FF] mb-1">Beneficiary Name</p>
            <input className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"></input>
          </div>
          <div className="my-2">
            <p className="text-[#8075FF] mb-1">IFSC Code</p>
            <input className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"></input>
          </div>
          <div className="my-2">
            <p className="text-[#8075FF] mb-1">Account Number</p>
            <input className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"></input>
          </div>
          <div className="my-2">
            <p className="text-[#8075FF] mb-1">Branch</p>
            <input className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"></input>
          </div>
          <div className="my-2">
            <p className="text-[#8075FF] mb-1">Bank Name</p>
            <input className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
