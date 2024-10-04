import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Features from "./_components/Features";
import Footer from "@/components/resuables/Footer";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Features />
      <hr className="dark:h-px h-[2px] bg-foreground" />
      <Footer className="max-md:pb-5" />
    </div>
  );
};

export default HomePage;
