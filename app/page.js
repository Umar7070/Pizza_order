'use client'
import React from "react";
import HomeProduct from "./components/HomeProduct";
import Link from "next/link";
import { motion,easeIn } from "framer-motion";

const page = () => {
  return (
    <>
      <motion.div  
      
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 1, ease: easeIn },
      }}
      className="container my-10 flex flex-col md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <em className="text-xl md:text-2xl capitalize text-red-400">Are you hungry?</em>
          <h1 className="text-3xl md:text-4xl font-bold">Don't Wait!</h1>
          <div className="my-3">
            <Link href='/products' className="bg-yellow-500 rounded-full hover:bg-yellow-400 text-white px-4 py-2 capitalize">
              order now
            </Link>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="mt-5 md:mt-0">
          <img src="/img/pizza.png" alt="Pizza" className="w-48 md:w-64 lg:w-72" />
        </div>
      </motion.div>
      
      {/* HomeProduct Component */}
      <HomeProduct />
    </>
  );
};

export default page;
