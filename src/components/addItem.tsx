import React from "react";
import CatalogueButton from "./catalogueButton";

const AddItem = () => {
  return (
    <div>
      <h1 className=" my-4 text-3xl font-semibold text-[#211A1D]">
        Add items in your catalogue
      </h1>
      <p className="text-[#211A1D]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu blandit
        elit, in ligula.
      </p>
      <div className="flex flex-col gap-5">
        <CatalogueButton
          icon="/assets/images/button/camera.svg"
          label="Take a photo of a sample item"
          onClick={() => {}}
        />

        <div className="flex flex-col gap-2">
          <CatalogueButton
            icon="/assets/images/button/mic.svg"
            label="Record audio describing item"
            onClick={() => {}}
          />
          <div className="flex flex-row gap-0 w-[80vw] items-center justify-center">
            <div className="w-[45%] h-[1px] bg-black" />
            <div className="mx-2">or</div>
            <div className="w-[45%] h-[1px] bg-black" />
          </div>
          <CatalogueButton
            icon="/assets/images/button/notepad.svg"
            label="Input item description manually"
            onClick={() => {}}
          />
        </div>

      </div>
    </div>
  );
};

export default AddItem;
