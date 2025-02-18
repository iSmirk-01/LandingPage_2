"use client";

import Image from "next/image";
import NexcentLogo from "@/public/svg/NexcentLogoSvg.svg";
import Button from "./components/ButtonIcon";
import { GoArrowRight } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[58px] flex items-center justify-between px-6 md:px-20 py-8 shadow-sm bg-white">
      {/* Logo */}
      <Image src={NexcentLogo} alt="Nexcent logo" className="scale-[1.2]" />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden cursor-pointer"
        onClick={openMenu}
        aria-label="Toggle menu"
      >
        <IoMenu className="text-2xl" />
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute top-[58px] left-0 w-full bg-slate-100 md:bg-white md:static md:w-auto md:flex md:items-center md:gap-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-4 text-gray-700 text-lg  md:px-0">
          <li className="cursor-pointer hover:text-darkLime hover:bg-slate-200 md:hover:bg-transparent px-7 md:px-0">Home</li>
          <li className="cursor-pointer hover:text-darkLime hover:bg-slate-200 md:hover:bg-transparent px-7 md:px-0">Features</li>
          <li className="cursor-pointer hover:text-darkLime hover:bg-slate-200 md:hover:bg-transparent px-7 md:px-0">Community</li>
          <li className="cursor-pointer hover:text-darkLime hover:bg-slate-200 md:hover:bg-transparent px-7 md:px-0">Blog</li>
          <li className="cursor-pointer hover:text-darkLime hover:bg-slate-200 md:hover:bg-transparent px-7 md:px-0">Pricing</li>
        </ul>
        <Button
          name="Register Now"
          containerCss="hidden lg:flex px-4 py-2 rounded bg-darkLime text-white hover:bg-lime-600"
          cssBtn=""
          icon={<GoArrowRight className="text-white" />}
        />
      </div>
    </div>
  );
}

export default Nav;
