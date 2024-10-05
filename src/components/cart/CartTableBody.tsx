import Image from "next/image";
import React, { ChangeEvent } from "react";
import { MdDelete } from "react-icons/md";

interface cartTableT {
  src: string;
  course: string;
  price: number;
  decrementClick: () => void;
  incrementClick: () => void;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  totPrice: number;
  removeCartClick: () => void;
}

const CartTableBody = ({
  src,
  course,
  price,
  decrementClick,
  incrementClick,
  value,
  onChange,
  totPrice,
  removeCartClick,
}: cartTableT) => {
  return (
    <tbody>
      <tr className="border-b border-gray-300">
        <td className="px-4 py-2 border border-gray-300">
          <Image src={src} alt="lego image" width={100} height={100} />
        </td>
        <td className="px-4 py-2 border border-gray-300 w-[310px]">{course}</td>
        <td className="px-4 py-2 border border-gray-300">INR {price}</td>
        <td className="px-4 py-2 border border-gray-300">
          <div className="flex flex-row ">
            <button
              className="px-2 py-1 border border-gray-300 text-lg"
              onClick={decrementClick}
            >
              -
            </button>
            <input
              type="number"
              className="w-16 h-10 text-center border border-gray-300 mx-2"
              value={value}
              onChange={onChange}
              min="1"
            />
            <button
              className="px-2 py-1 border border-gray-300 text-lg"
              onClick={incrementClick}
            >
              +
            </button>
          </div>
        </td>
        <td className="px-4 py-2 border border-gray-300">INR {totPrice}</td>
        <td className="px-4 py-2 border border-gray-300 text-center">
          <button className="text-slate-400 hover:text-red-500 transition-colors font-bold" onClick={removeCartClick}>
            <MdDelete className="h-8 w-8 "/>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartTableBody;
