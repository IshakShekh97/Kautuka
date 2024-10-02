import { TextGenerateEffect } from "@/components/ace/text-generate-effect";
import ProductCard from "@/components/resuables/ProductCard";
import React from "react";

const Products = () => {
  const images = [
    {
      imageUrl: "/images/shirt-1.webp",
      alt: "Shirt 1",
      idx: 0,
    },
    {
      imageUrl: "/images/shirt-2.webp",
      alt: "Shirt 2",
      idx: 1,
    },
    {
      imageUrl: "/images/shirt-3.webp",
      alt: "Shirt 3",
      idx: 2,
    },
    {
      imageUrl: "/images/shirt-4.webp",
      alt: "Shirt 4",
      idx: 3,
    },
    {
      imageUrl: "/images/shirt-5.webp",
      alt: "Shirt 5",
      idx: 4,
    },
    {
      imageUrl: "/images/shirt-6.jpg",
      alt: "Shirt 6",
      idx: 5,
    },
  ];

  return (
    <div className="w-full mb-32 mt-10 relative">
      <div className="flex items-center justify-center flex-col ">
        <TextGenerateEffect
          className="sm:text-5xl text-4xl text-center underline underline-offset-4"
          words="Trending Products"
        />

        {/* Product ccards */}
        <div className="pt-32 flex items-center justify-center flex-wrap gap-2 sm:gap-5">
          {images.map((image) => (
            <ProductCard
              key={image.idx}
              imageAlt={image.alt}
              imageUrl={image.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
