"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "../components/productcard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-4 font-bold text-lg">
        Welcome to Our Shopping Website
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 m-10">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} legacyBehavior>
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
