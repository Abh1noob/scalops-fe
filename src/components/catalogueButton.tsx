import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface CatalogueButtonProps {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}

const CatalogueButton = (props: CatalogueButtonProps) => {
  return (
    <div
      className="w-[80vw] h-12 flex flex-row rounded-[20px] bg-[#8075FF] text-white"
      onClick={props.onClick}
    >
      <div className="w-[20%] flex flex-row justify-end items-center pr-3">
        {props.children}
      </div>
      <div className="w-[80%] flex flex-row justify-start items-center text-[14px]">
        {props.label}
      </div>
    </div>
  );
};

export default CatalogueButton;
