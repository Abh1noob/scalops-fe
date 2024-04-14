import React from "react";

interface CatalogueCardProps {
  item: string;
  price: number;
  quantity: number;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({
  item,
  price,
  quantity,
}) => {
  return (
    <div className="bg-white m-2 rounded-lg flex flex-row p-4 gap-4 w-full">
      <div className="h-24 w-24 border-2 border-black rounded-xl bg-slate-400"></div>
      <div className="flex flex-col ">
        <p className="font-bold font-montserrat text-xl">{item}</p>
        <p>₹{price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CatalogueCard;
