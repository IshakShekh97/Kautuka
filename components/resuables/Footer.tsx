import { contactLinks, legalLinks, navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-60  w-full">
      <div className="flex items-center justify-evenly md:max-w-screen-2xl mx-auto font-bold">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Navigation</h1>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Legel </h1>
          <div className="flex flex-col gap-1">
            {legalLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Contact us </h1>
          <div className="flex flex-col gap-1">
            {contactLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Socials </h1>
          <div className="flex flex-col gap-1">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
