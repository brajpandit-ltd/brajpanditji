"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaBolt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { Product } from "@/types/products";
import { Button } from "../common";
import { slugify, trimWords } from "@/utils/unitsFun";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useRouter();

  const { addToCart }: any = {};

  const onBuyNow = () => {
    navigate.push("/checkout");
  };

  const onAddToCart = (product: Product) => {
    addToCart({ ...product, product: product.id, quantity: 1 });
    toast.success("Product added to cart!");
  };

  const onToggleFavorite = () => {};

  return (
    <div className="relative w-[300px] h-[350px] rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <Link href={`/shop/${slugify(product?.title)}`}>
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width={300}
          height={350}
          className="object-cover w-full h-full"
        />
      </Link>

      {product?.discount && (
        <span className="absolute top-3 left-3 bg-white text-[#a11d1d] font-semibold text-sm rounded-full px-4 py-1 shadow">
          {product.discount}% OFF
        </span>
      )}

      <Button
        type="button"
        size="v-small"
        onClick={() => onToggleFavorite()}
        className="absolute top-3 right-3 rounded-full"
      >
        {true ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
      </Button>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-[rgba(231,231,231,0.7)]">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <h4 className="text-xs font-semibold">
          {product?.category || "Spiritual"}
        </h4>
        <p className="text-xs">{trimWords(product.description, 5)}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={14}
                className={
                  i < Math.floor(product?.rating)
                    ? "text-secondary"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({product?.rating.toFixed(1)})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ₹{product.price}
          </span>
          <span className="text-sm line-through">
            ₹{Math.floor(product.price * (1 + product?.discount / 100))}
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          <Button
            label="Add to Cart"
            variant="primary"
            size="v-small"
            icon={<FaShoppingCart size={12} />}
            onClick={() => onAddToCart(product)}
          />
          <Button
            label="Buy Now"
            variant="secondary"
            size="v-small"
            icon={<FaBolt size={12} />}
            onClick={() => onBuyNow()}
          />
        </div>
      </div>
    </div>
    // <div className=" rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 dark:hover:shadow-yellow-500/20 transition-all duration-500 group">
    //   {/* Image Container */}
    //   <div className="relative h-64 overflow-hidden bg-gradient-to-br">
    //     <Image
    //       src={product?.imageUrl || "/default-product.png"}
    //       alt={product?.name || "Product"}
    //       width={300}
    //       height={260}
    //       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    //     />

    //     {/* Overlay */}
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    //     {/* Badges */}
    //     <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
    //       {discount}% OFF
    //     </div>

    //     {/* Favorite Button */}
    //     <button
    //       onClick={(e) => {
    //         e.preventDefault();
    //         onToggleFavorite(product.id);
    //       }}
    //       className="absolute top-3 right-3 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:scale-110 transition-all duration-200 shadow-lg"
    //     >
    //       {true ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
    //     </button>

    //     {/* Quick Actions */}
    //     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //       <div className="flex gap-3">
    //         <Link href={`/products/${product.id}`}>
    //           <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20">
    //             <FaEye size={16} />
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Content */}
    //   <div className="p-5 space-y-3">
    //     <Link href={`/products/${product.id}`}>
    //       <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-2 leading-tight group-hover:text-orange-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
    //         {product.name}
    //       </h3>
    //     </Link>

    //     {/* Description */}
    //     <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
    //       {product.description}
    //     </p>

    //     {/* Rating */}
    //     <div className="flex items-center gap-2">
    //       <div className="flex items-center">
    //         {[...Array(5)].map((_, i) => (
    //           <FaStar
    //             key={i}
    //             size={14}
    //             className={
    //               i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
    //             }
    //           />
    //         ))}
    //       </div>
    //       <span className="text-sm text-gray-500 dark:text-gray-400">
    //         ({rating.toFixed(1)})
    //       </span>
    //     </div>

    //     {/* Price */}
    //     <div className="flex items-center gap-2">
    //       <span className="text-xl font-bold text-orange-600 dark:text-yellow-400">
    //         ₹{product.price}
    //       </span>
    //       <span className="text-sm text-gray-500 line-through">
    //         ₹{Math.floor(product.price * (1 + discount / 100))}
    //       </span>
    //     </div>

    //     {/* Category */}
    //     <div className="text-xs text-orange-600 dark:text-yellow-400 bg-orange-50 dark:bg-yellow-900/30 px-2 py-1 rounded-full inline-block">
    //       {product.category || "Spiritual"}
    //     </div>

    //     {/* Action Buttons */}
    //     <div className="flex gap-2 pt-3">
    //       <Button
    //         label="Add to Cart"
    //         variant="primary"
    //         size="small"
    //         icon={<FaShoppingCart size={12} />}
    //         onClick={() => onAddToCart(product)}
    //       />
    //       <Button
    //         label="Buy Now"
    //         variant="secondary"
    //         size="small"
    //         icon={<FaBolt size={12} />}
    //         onClick={() => onBuyNow(product)}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
