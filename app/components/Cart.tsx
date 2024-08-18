"use client";

import React from "react";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <div className="ml-4">
      <span className="bg-red-500 text-white p-2 rounded-full text-m">
        Cart: {cartCount}
      </span>
    </div>
  );
};

export default Cart;
