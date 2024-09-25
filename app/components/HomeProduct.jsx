import React from "react";
import FoodData from "@/constant/constant";

const HomeProduct = () => {
  return (
    <>
      <div className="container grid grid-cols-5 pb-2 gap-5">
        {FoodData.map((curEle, index) => {
          return (
            <>
              <div className="w-[100%] shadow-lg rounded-lg p-3">
                <div className="flex justify-center items-center">
                  <img src={curEle?.img} alt="" className="h-[150px]" />
                </div>
                <div className="flex justify-between  my-1">
                  <p>onion pizz</p>
                  <p>price</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, id.
                </p>
                <div className="flex justify-between my-1">
                  <p>cating</p>
                  <div className="bg-orange-400 rounded-full   px-2">
                    <button className="capitalize text-white">add</button>
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
