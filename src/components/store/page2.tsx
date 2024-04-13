import React from "react";

const Page2 = () => {
  return (
    <div className="m-8">
      <div className="flex flex-row gap-10">
        <div>2/3</div>
        <div>Store Creation</div>
      </div>
      <h1 className=" my-4 text-3xl font-semibold text-[#211A1D]">
        Enter Store Address
      </h1>
      <p className="text-[#211A1D]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu blandit
        elit, in ligula.
      </p>

      <div className="mb-2 mt-6">
        <p className="text-[#211A1D] mb-1">Address</p>
        <textarea
          className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"
          placeholder="Enter the address of your store"
          cols={20}
        ></textarea>
      </div>
      <div className="flex flex-col w-[80vw] justify-between">
        <div className="flex flex-row justify-between">
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">City</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"
              placeholder="Enter City"
            ></input>
          </div>
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">State</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"
              placeholder="Enter State"
            ></input>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">Zip Code</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"
              placeholder="Enter Zip Code"
            ></input>
          </div>
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">Country</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]"
              placeholder="Enter Country"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
