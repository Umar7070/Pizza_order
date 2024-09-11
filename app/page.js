"use client";

import { UserContext } from "@/context/MyContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const {curEle,handleclick}= useContext(UserContext)
  const [product, setProduct] = useState([]);
  console.log(product);
  const getapi = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProduct(res.data.products);
  };
  useEffect(() => {
    getapi();
  }, []);
  return (
    <>
      <div className="container ">
        <h1 className="font-bold my-10">Products</h1>
        <div className="grid grid-cols-5  gap-5">
          {product.map((curEle, index) => {
            return (
              <>
                <div className="  border shadow-lg  p-3">
                  <img src={curEle.thumbnail} className="h-[150px] w-[100%] " />
                  <div className="text-center">
                    <h2 className=" font-bold  text-sm my-1">Havana spacal</h2>
                    <p className=" font-bold ">small</p>
                  </div>
                  <div className="flex justify-between p-1 my-1">
                    <p className="font-bold">$5</p>
                    <button
                      className="bg-yellow-500 w-[50px] text-white rounded-full hover:bg-green-700 hover:text-white"
                      onClick={() => handleclick(curEle)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
