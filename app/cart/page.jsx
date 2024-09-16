"use client";
import { UserContext } from "@/context/MyContext";
import React, { useContext } from "react";

const Cart = () => {
  const { addItem, setAddItem,deleteItem } = useContext(UserContext);



  return (
    <>
      <div className="container mx-auto lg-w-1/2 w-full my-10 shadow-lg py-5 flex flex-col gap-10 ">
        {addItem.map((curEle, index) => {
          return (
            <div key={index}>
              <div className="flex  justify-between items-center rounded-full">
                <div className="flex items-center gap-5">
                  <img src={curEle.images} alt="" className="h-[50px]" />
                  <span>{curEle.title}</span>
                </div>

                <div className="flex gap-6 ">
                  <button className="bg-yellow-400 w-[50px] rounded-full text-1xl font-bold">
                    +
                  </button>
                  <p>1</p>
                  <button className="bg-yellow-400 w-[50px] rounded-full text-1xl font-bold ">
                    -
                  </button>
                </div>
                <div>{curEle.price}</div>
                <div>
                  <button onClick={()=>deleteItem(curEle)}  className="bg-red-700 text-white w-[80px] capitalize rounded-full">
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="flex justify-end gap-6">
          <h4>gran total </h4> <span> 1000 </span>
          <button className="w-[100px] text-white bg-yellow-400 capitalize rounded-full">order now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
