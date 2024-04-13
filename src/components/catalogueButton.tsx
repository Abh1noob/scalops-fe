import React from "react";
import Image from "next/image";

interface CatalogueButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const CatalogueButton = (props: CatalogueButtonProps) => {
  return (
    <div
      className="w-[80vw] h-12 flex flex-row rounded-[20px] bg-[#8075FF]"
      onClick={props.onClick}
    >
      <div className="w-[20%] flex flex-row justify-end items-center">
        <Image
          src={props.icon}
          alt={props.label}
          className="h-5 w-5 mr-2"
          width={0}
          height={0}
        />
      </div>
      <div className="w-[80%] flex flex-row justify-start items-center">
        {props.label}
      </div>
    </div>
  );
};

export default CatalogueButton;
