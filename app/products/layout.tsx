import React from "react";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-24 md:pt-32 max-md:pb-40">{children}</div>;
};

export default ProductsLayout;
