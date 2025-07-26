import React from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Tulsi Mala",
    price: 299,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "2",
    name: "Brass Diya",
    price: 149,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "3",
    name: "Ganga Jal",
    price: 79,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "4",
    name: "Rudraksha Bracelet",
    price: 399,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "5",
    name: "Puja Thali Set",
    price: 599,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "6",
    name: "Agarbatti Pack",
    price: 59,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "7",
    name: "Brass Bell",
    price: 199,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "8",
    name: "Camphor Box",
    price: 89,
    imageUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  // Add more items as needed
];

// devine products
const HomeProducts: React.FC = () => {
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

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-400">
        <div className="flex space-x-4 min-w-max">
          {sampleProducts.map((product, index) => (
            <div
              key={product.id + index}
              className="min-w-[180px] max-w-[180px] bg-white dark:bg-gray-800 border border-orange-100 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg p-3 transition-all"
            >
              <div className="w-full h-[140px] relative rounded-xl overflow-hidden mb-3">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                {product.name}
              </h3>
              <p className="text-orange-600 font-bold text-sm mt-1">
                ₹{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
