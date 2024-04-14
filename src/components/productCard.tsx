import React from "react";

interface ProductCardProps {
  item: string;
  price: number;
  quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, price, quantity }) => {
  return (
    <div className="bg-white m-2 rounded-lg flex flex-col items-center p-2 gap-4 w-[35vw] h-fit">
      <div className="h-[30vw] w-[30vw] border-2 border-black rounded-xl bg-slate-400"></div>
      <div className="flex flex-col justify-start w-full px-2">
        <p className="font-bold font-montserrat text-xl">{item}</p>
        <p>₹{price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default ProductCard;
