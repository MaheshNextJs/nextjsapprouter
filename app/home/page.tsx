import React from "react";
import Link from "next/link";
import ProductCard from "../components/productcard";

const HomePage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra",
      price: 19.99,
      image: "/images/phone1.jpg",
    },
    {
      id: 2,
      name: "IPhone 13 Pro Max",
      price: 29.99,
      image: "/images/phone2.jpg",
    },
    {
      id: 3,
      name: "Samsung S23 Ultra",
      price: 39.99,
      image: "/images/phone3.jpg",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-4 font-bold text-lg">
        Welcome to Our Shopping Website
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 m-10">
        {products.map((product) => (
          <Link legacyBehavior key={product.id} href={`/product/${product.id}`}>
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
