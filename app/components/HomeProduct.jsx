
"use client";

import React, { useContext, useState, useEffect } from "react";
import Cardsdata from "@/constant/constant";
import { UserContext } from "@/context/MyContext";

const HomeProduct = () => {
  const { handleClick, isAdding } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  console.log("isadding", isAdding);

  return (
    <>
      {loading ? (
        <div className="flex justify-center ">
           <div className="w-6 h-6 border-4 border-blue-400 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-2 gap-5">
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
        </div>
      )}
    </>
  );
};

export default HomeProduct;
