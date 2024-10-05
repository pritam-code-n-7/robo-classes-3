"use client";
import { LOGO } from "@/constants/Images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { ModeToggle } from "@/themes/ModeToggle";
import { DialogDemo } from "./DialogDemo";
import { PopoverDemo } from "./PopoverDemo";

const NavBar = () => {

  return (
    <div className="flex flex-row justify-center gap-5 px-3 py-6 shadow-md ">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={LOGO}
          alt="robo-class-logo"
          width={132.43}
          height={39.51}
          className="w-20 h-auto sm:w-28 md:w-32 lg:w-36 shadow-md shadow-gray-300 dark:shadow-black"
          role="button"
        />
      </Link>
      {/* Links Section (Hidden on mobile and tablet) */}
      <div className="lg:flex hidden">
        <NavigationMenuDemo />
      </div>

      {/* Input and Button Section */}
      <div className="flex flex-row gap-4 items-center ">
        <div className="w-full lg:w-auto">
         <PopoverDemo />
        </div>
        <DialogDemo />
      </div>
      {/* Mode Toggle */}
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
