import React from "react";
import AddItem from "../addItem";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { usePageCountStore } from "@/store/store";

const Page3 = () => {
  const { pageCount, setPageCount } = usePageCountStore();

  const handleNext = () => {
    console.log("New Page Count: ", pageCount);
    setPageCount(pageCount + 1);
  };

  const handlePrev = () => {
    console.log("New Page Count: ", pageCount);
    setPageCount(pageCount - 1);
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
          <div>3/4</div>
          <div className="font-montserrat">Store Creation</div>
        </div>
        <RiArrowRightSLine
          size={30}
          className="opacity-50 -mx-2"
          onClick={handleNext}
        />
      </div>
      <AddItem />
    </div>
  );
};

export default Page3;
