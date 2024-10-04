import Footer from "@/components/resuables/Footer";
import React from "react";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-24 md:pt-32 max-md:pb-[31rem] pb-96 relative">
      {children}
      <Footer className="absolute bottom-5" />
    </div>
  );
};

export default ProductsLayout;
