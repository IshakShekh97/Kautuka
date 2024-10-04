import Image from "next/image";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="fixed w-full h-20 bg-muted/10 backdrop-blur flex items-center justify-between sm:px-5 px-3 z-[99]">
      <ThemeSwitcher
        variant={"outline"}
        btnClassName="!bg-transparent border border-primary/30"
      />
      <Link href={"/"}>
        <nav className="flex flex-1 items-center justify-center gap-3">
          <Image src={"/logo.png"} alt="logo" height={30} width={30} />
          {/* <h1 className="text-4xl font-black bg-gradient-to-tr from-amber-500 to-emerald-500 text-transparent bg-clip-text "> */}
          <h1 className="text-4xl font-black">Kautuka</h1>
        </nav>
      </Link>
      <div className="">
        <Button size={"icon"}>
          <ShoppingCart />
        </Button>
      </div>
    </header>
  );
};

export default Header;
