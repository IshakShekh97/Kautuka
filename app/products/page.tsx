import GoBackBtn from "@/components/resuables/GoBackBtn";
import ProductCard from "@/components/resuables/ProductCard";
import { staticImages } from "@/constants";
import Link from "next/link";

const AllProductsPage = () => {
  return (
    <div className="min-h-screen w-full max-md:px-5 flex flex-col md:pb-10 ">
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
