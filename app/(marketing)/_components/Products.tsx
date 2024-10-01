import { TextGenerateEffect } from "@/components/ace/text-generate-effect";
import ProductCard from "@/components/resuables/ProductCard";
import React from "react";

const Products = () => {
  return (
    <div className="w-full mb-32 mt-10">
      <div className="flex items-center justify-center flex-col ">
        <TextGenerateEffect
          className="sm:text-5xl text-4xl text-center"
          words="Trending Products"
        />

        {/* Product ccards */}
        <div className="pt-32 flex items-center justify-center flex-wrap gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
