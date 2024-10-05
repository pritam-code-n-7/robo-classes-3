"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/contexts/UseCart";
import CartButton from "./CartButton";
import TotalCard from "./TotalCard";
import CartTableBody from "./CartTableBody";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const [quantity, setQuantity] = useState(4);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

 

  const Data = [
    { name: "Image" },
    { name: "Product" },
    { name: "Price" },
    { name: "Quantity" },
    { name: "Total" },
    { name: "Remove" },
  ];

  //clear the whole cart
  const handleRemoveAll = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
    {isClient ?<div className="p-20 flex flex-col gap-8">
      <p className="text-2xl ">Your Cart Items</p>
       <table className="min-w-full h-auto table-auto border-collapse border border-gray-300 ">
        <thead>
          <tr className="bg-gray-100 dark:bg-sky-100 dark:text-black text-left">
            {Data.map((item, index) => (
              <th className="px-4 py-2 border border-gray-300" key={index}>
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        {state.cart.length > 0 ? (
          state.cart.map((product) => {
            const imageSrc = product.src?.[0]?.src || "";
            return (
              <CartTableBody
                key={product.id}
                src={imageSrc}
                course={product.course || ""}
                price={product.price ? Number(product.price.toFixed()) : 0}
                decrementClick={decrementQuantity}
                incrementClick={incrementQuantity}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                totPrice={Number(((product.price ?? 0) * quantity).toFixed(2))}
                removeCartClick={() => removeFromCart(product.id || 0)}
              />
            );
          })
        ) : (
          <p className="text-4xl text-gray-400">Your cart is empty</p>
        )}
      </table> 

      <CartButton onClick={handleRemoveAll} />
      {state.cart.map((product) => (
        <TotalCard
          total={((product.price ?? 0) * quantity).toFixed(2)}
          subtotal={((product.price ?? 0) * quantity).toFixed(2)}
          key={product.id}
        />
      ))}
    </div>: ''}

    </>
  );
};

export default Cart;
