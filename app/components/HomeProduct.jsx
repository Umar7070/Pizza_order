
"use client";

import React, { useContext, useState, useEffect } from "react";
import Cardsdata from "@/constant/constant";
import { UserContext } from "@/context/MyContext";
import { motion,easeIn } from "framer-motion";

const HomeProduct = () => {
  const { handleClick, isAdding } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  console.log("isadding", isAdding);

  return (
    <>
     
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
         transition: { delay: 2, duration: 1, ease: easeIn },

        }}
        
        className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-2 gap-5">
          {Cardsdata.map((curEle, index) => {
            return (
              <div key={index}>
                <div className="w-full shadow-lg rounded-lg p-3 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
                  <div className="flex justify-center items-center">
                    <img
                      src={curEle?.imgdata}
                      alt={curEle.rname}
                      className="w-full h-[200px] rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <em className="text-md text-pink-600">{curEle.rname}</em>
                    <p className="text-xl text-blue-700">₹{curEle.price}</p>
                  </div>
                  <p className="text-center font-bold my-3 text-gray-600">
                    {curEle.address}
                  </p>
                  <div className="flex justify-between items-center my-2">
                    <button
                      onClick={() => handleClick(curEle)}
                      className={`${
                        isAdding === curEle?.id
                          ? "bg-green-500 text-white cursor-not-allowed"
                          : "bg-orange-500 text-white"
                      } capitalize px-3 rounded-full`}
                    >
                      {isAdding === curEle.id ? "added" : "add"}
                    </button>
                    <p className="bg-green-500 text-white px-3 rounded-full">
                      {curEle.rating}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      
    </>
  );
};

export default HomeProduct;
