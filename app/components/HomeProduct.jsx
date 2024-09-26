import React from "react";
import Cardsdata from "@/constant/constant";

const HomeProduct = () => {
  return (
    <>
      <div className="container grid grid-cols-4 pb-2 gap-5">
        {Cardsdata.map((curEle, index) => {
          return (
            <div key={index}>
              <div className="w-[100%] shadow-lg rounded-lg p-3 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex justify-center items-center">
                  <img
                    src={curEle?.imgdata}
                    alt=""
                    className="w-[100%] h-[200px] rounded-lg"
                  />
                </div>
                <div className="flex justify-between  my-2">
                  <p className="text-lg text-pink-600">{curEle.rname}</p>
                  <p className="text-xl text-blue-700">₹{curEle.price}</p>
                </div>
                <p className="text-center font-bold my-3 text-gray-600">
                 {curEle.address}
                </p>
                <div className="flex justify-between items-center my-2">
                  <img src={curEle.arrimg} alt="" className="h-5" />
                  <div className="bg-orange-400 rounded-full   px-2">
                    <button className="capitalize text-white">add</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeProduct;
