import { TextGenerateEffect } from "@/components/ace/text-generate-effect";
import ProductCard from "@/components/resuables/ProductCard";
import { staticImages } from "@/constants";
import React from "react";

const Products = () => {
  return (
    <div className="w-full mb-32 mt-10 relative">
      <div className="flex items-center justify-center flex-col ">
        <TextGenerateEffect
          className="sm:text-5xl text-4xl text-center underline underline-offset-4"
          words="Trending Products"
        />

        {/* Product ccards */}
        <div className="pt-32 flex items-center justify-center flex-wrap gap-2 sm:gap-5">
          {staticImages.map((image) => (
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
