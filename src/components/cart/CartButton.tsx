'use client'
import { ButtonDemo } from "@/demo/ButtonDemo";
import { useRouter } from "next/navigation";
import React from "react";

const CartButton = ({onClick}:{onClick:()=>void}) => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-center">
      <ButtonDemo
        name="CONTNUE SHOPPING"
        type="button"
        onClick={() => router.back()}
        className="py-6 px-8 bg-custom-gradient text-white  rounded-3xl "
      />
      <div className="flex flex-row gap-6 items-center">
        <ButtonDemo
          name="UPDATE CART"
          type="button"
          className="py-6 px-8 bg-custom-gradient text-white  rounded-3xl "
        />
        <ButtonDemo
          name="CLEAR CART"
          type="button"
          onClick={onClick}
          className="py-6 px-8 bg-custom-gradient text-white  rounded-3xl "
        />
      </div>
    </div>
  );
};

export default CartButton;
