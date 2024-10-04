import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductCard from "@/components/resuables/ProductCard";
import { staticImages } from "@/constants";
import Link from "next/link";

const AllProductsPage = () => {
  return (
    <div className="h-full w-full max-md:px-1 flex flex-col">
      <GoBackBtn herf="/" btnText="Go Back To HomePage" />

      <div className="flex max-md:items-center max-md:justify-center  flex-wrap gap-2 sm:gap-5">
        {staticImages.map((image) => (
          <Link key={image.idx} href={`/products/${image.idx + 1}`}>
            <ProductCard imageAlt={image.alt} imageUrl={image.imageUrl} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
