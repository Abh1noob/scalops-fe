import React, { useState } from "react";
import { IoIosBarcode } from "react-icons/io";
import { TiPencil } from "react-icons/ti";

interface CatalogueCardProps {
  item: string;
  price: number;
  quantity: number;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({
  item: initialItem,
  price: initialPrice,
  quantity: initialQuantity,
}) => {
  const [item, setItem] = useState(initialItem);
  const [price, setPrice] = useState(initialPrice);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited item, price, and quantity here
    setIsEditing(false);
    // You might want to send this data to the backend or update the state in your parent component
  };

  const handleCancel = () => {
    // Reset the changes
    setItem(initialItem);
    setPrice(initialPrice);
    setQuantity(initialQuantity);
    setIsEditing(false);
  };

  return (
    <div className="bg-white m-2 rounded-lg flex flex-row p-4 gap-4 w-full">
      <div className="w-[30%]">
        <div className="h-[100px] w-[100px] border-2 border-black rounded-xl bg-slate-400"></div>
      </div>
      <div className="flex flex-col w-[40%]">
        {isEditing ? (
          <>
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="font-bold font-montserrat text-xl outline-none w-min"
            />
            <div className="flex flex-row gap-1">
              ₹
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="w-min outline-none"
              />
            </div>
            <div className="flex flex-row gap-1">
              Qty:
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-min outline-none"
              />
            </div>
          </>
        ) : (
          <>
            <p className="font-bold font-montserrat text-xl">{item}</p>
            <p>₹ {price}</p>
            <p>Qty: {quantity}</p>
          </>
        )}
      </div>
      <div className="flex flex-row justify-evenly w-[40%] items-center">
        {isEditing ? (
          <>
            <div className="flex flex-col">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <TiPencil size={25} onClick={handleEdit} />
        )}
        {!isEditing ? <IoIosBarcode size={25} /> : <></>}
      </div>
    </div>
  );
};

export default CatalogueCard;
