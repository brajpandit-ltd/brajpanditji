import React from "react";
import ProductCard from "../../ProductCard";
import { IProductsResponse, Product } from "@/types/products";

// devine products
const HomeProducts = async () => {
  let products: Product[] = [];

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/products`);

    const res: IProductsResponse = await response.json();

    products = res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (products?.length === 0) {
    return (
      <section className="relative py-12 mx-4 md:mx-8">
        <div className="title border-l-4 border-secondary pl-4">
          <h4 className="text-sm md:text-base text-primary">🎶 Devine</h4>
          <h2 className="text-xl font-bold">No Products Found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 mx-4 md:mx-8">
      <div className="title border-l-4 border-secondary pl-4">
        <h4 className="text-sm md:text-base text-primary">
          🎶 Devine Products
        </h4>
        <h2 className="text-xl font-bold">Explore Btajdham Products</h2>

        <p className="text-sm md:base">
          Discover our exclusive range of Braj Dham products, offering you the
          spiritual essence and authenticity of sacred rituals. Each product is
          crafted to elevate your spiritual journey and connect you with the
          divine.
        </p>
      </div>

      <div className="mt-4">
        <div className="flex w-full flex-wrap gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
