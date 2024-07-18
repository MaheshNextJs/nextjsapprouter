"use client";

import React from "react";
import { useParams } from "next/navigation";

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  const product = {
    id,
    name: `Product ${id}`,
    price: id === "1" ? 19.99 : id === "2" ? 29.99 : 39.99,
    image: `/images/phone${id}.jpg`,
    description: `This is a detailed description of Product ${id}.`,
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-4 font-bold text-lg">{product.name}</h1>
      <div className="flex flex-col items-center mt-8">
        <img src={product.image} alt={product.name} className="w-1/5" />
        <p className="mt-4">{product.description}</p>
        <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
