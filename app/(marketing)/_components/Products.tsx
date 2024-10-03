import { TextGenerateEffect } from "@/components/ace/text-generate-effect";
import ProductCard from "@/components/resuables/ProductCard";
import { staticImages } from "@/constants";
import Link from "next/link";
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
            <Link key={image.idx} href={`/products/${image.idx + 1}`}>
              <ProductCard imageAlt={image.alt} imageUrl={image.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
