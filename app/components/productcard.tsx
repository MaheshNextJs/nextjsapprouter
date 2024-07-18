import React from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-48 h-48" />
        <h2 className="text-lg font-bold text-center mt-4">{product.name}</h2>
        <p className="text-gray-600 text-center mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
