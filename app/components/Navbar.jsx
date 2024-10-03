'use client'

import { UserContext } from "@/context/MyContext";
import Link from "next/link";
import React, { useContext } from "react";

const Navbar = () => {
  const {addItem}= useContext(UserContext)
  return (
    <>
      {/* <div className=" container  flex justify-between items-center my-5">
        <Link href="/">
          <img src="/img/logo.png" />
        </Link>
        <div className="flex items-center gap-10 capitalize font-bold">
          <Link href="/">home</Link>
          <Link href="/products">products</Link>
          <Link href='cart' className="flex  items-center bg-yellow-600 w-[65px] justify-center gap-1 rounded-full">
            <span className="text-white">{addItem.length}</span>
            <img src="/img/cart.png" className="h-4" />
          </Link>
        </div>
      </div> */}

<div className="container flex justify-between items-center my-5">
  <Link href="/">
    <img src="/img/logo.png" className="h-8 w-auto sm:h-10" />
  </Link>
  <div className="flex items-center gap-4 sm:gap-10 capitalize font-bold text-sm sm:text-base">
    <Link href="/">home</Link>
    <Link href="/products">products</Link>
    <Link
      href="cart"
      className="flex items-center bg-yellow-600 w-[50px] sm:w-[65px] justify-center gap-1 rounded-full"
    >
      <span className="text-white">{addItem.length}</span>
      <img src="/img/cart.png" className="h-4" />
    </Link>
  </div>
</div>

    </>
  );
};

export default Navbar;
