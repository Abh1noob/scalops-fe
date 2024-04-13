import React from "react";

const Page1 = () => {
  return (
    <div className="m-8">
      <div className="flex flex-row gap-10">
        <div>1/3</div>
        <div>Store Creation</div>
      </div>
      <h1 className=" my-4 text-3xl font-semibold text-[#211A1D]">
        Enter Store Name
      </h1>
      <p className="text-[#211A1D]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu blandit
        elit, in ligula.
      </p>
      <div className="mb-2 mt-6">
        <p className="text-[#211A1D] mb-1">Store Name</p>
        <input className="h-12 w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1da2]" placeholder="Enter the name of your store"></input>
      </div>
    </div>
  );
};

export default Page1;
