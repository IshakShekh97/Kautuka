"use client";
import React, { useEffect, useState } from "react";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Features from "./_components/Features";
import Footer from "@/components/resuables/Footer";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("hello");
    }, 2000);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && (
        <div className="z-[99] fixed top-0 left-0  h-screen w-screen bg-red-500 flex items-center justify-center">
          Loading
        </div>
      )}

      <Hero />
      <Products />
      <Features />
      <hr className="dark:h-px h-[2px] bg-foreground" />
      <Footer />
    </div>
  );
};

export default HomePage;
