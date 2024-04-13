import React from "react";

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <div
      className="bg-[#8075FF] font-montserrat h-10 w-[30vw] flex items-center justify-center rounded-[20px] p-2 font-medium text-sm"
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};

export default PrimaryButton;
