import React, { ChangeEvent, useEffect, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { usePageCountStore } from "@/store/store";

const Page1 = () => {
  const [storeName, setStoreName] = useState<string>("");
  const { pageCount, setPageCount } = usePageCountStore();

  const handleNext = () => {
    console.log("New Page Count: ", pageCount);
    setPageCount(pageCount + 1);
  };

  const handlePrev = () => {
    console.log("New Page Count: ", pageCount);
    setPageCount(pageCount - 1);
  };
  
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setStoreName(storedName);
    }
  }, []);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setStoreName(newName);
    localStorage.setItem("name", newName);
  };


  return (
    <div className="m-8">
      <div className="flex flex-row justify-between items-center ">
        <RiArrowLeftSLine
          size={30}
          className="opacity-50 -mx-2"
          onClick={handlePrev}
        />
        <div className="flex flex-row gap-2">
          <div>1/4</div>
          <div className="font-montserrat">Store Creation</div>
        </div>
        <RiArrowRightSLine
          size={30}
          className="opacity-50 -mx-2"
          onClick={handleNext}
        />
      </div>
      <h1 className="my-4 text-3xl text-[#211A1D]">Enter Store Name</h1>
      <p className="text-[#211A1D] font-montserrat">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu blandit
        elit, in ligula.
      </p>
      <div className="mb-2 mt-6">
        <p className="text-[#211A1D] mb-1">Store Name</p>
        <input
          className="h-12 w-full bg-white rounded-lg placeholder:text-[12px] p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
          placeholder="Enter the name of your store"
          id="storeName"
          value={storeName}
          onChange={handleOnChange}
        ></input>
      </div>
    </div>
  );
};

export default Page1;
