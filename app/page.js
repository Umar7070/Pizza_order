import React from "react";
import HomeProduct from "./components/HomeProduct";

const page = () => {
  return (
    <>
      <div className="container my-10  flex justify-between items-center ">
        <div className="container flex flex-col gap-2">
          <em className="text-2xl capitalize">are you hungry ?</em>
          <h1 className="text-4xl font-bold">Don't Wait !</h1>
          <div>
            <button className="bg-yellow-500  rounded-full text-white px-3 p-1 my-2 capitalize">
              order now
            </button>
          </div>
        </div>
        <div>
          <img src="/img/pizza.png" />
        </div>
      </div>
      <HomeProduct />
    </>
  );
};

export default page;
