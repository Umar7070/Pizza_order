"use client";

import { UserContext } from "@/context/MyContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const HomeProduct = () => {

  const {addElement}= useContext(UserContext)
  const [card, setCard] = useState([]);
  console.log(card);
  const getapi = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setCard(res.data.products);
  };
  useEffect(() => {
    getapi();
  }, []);
  return (
    <>
      <div className="container grid grid-cols-5 gap-10">
        {card.map((curEle, index) => {
          return (
            <>
              <div className="container  shadow-lg p-3 gap-10">
                <div className="text-center ">
                  <img src={curEle.images} alt="" className="h-[150px]  " />
                  <p className="text-xs">{curEle.title}</p>
                  <p className="text-sm">{curEle.brand}</p>
                  <div className="flex justify-between items-center">
                    <p>{curEle.price}</p>
                    <button  onClick={()=> addElement(curEle)}  className="bg-yellow-600 w-[60px] rounded-full text-white my-2">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default HomeProduct;
