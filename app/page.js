import React from "react";

const page = () => {
  return (
    <>
      <div className="container ">
        <h1 className="font-bold my-10">Products</h1>
        <div className="grid grid-cols-5  gap-10">
          <div className=" w-[80%]">
            <img src="/img/peproni.png" className="h-[150px] w-[100%] " />
            <div className="text-center">
              <h2 className=" font-bold  text-sm my-1">Havana spacal</h2>
              <p className=" font-bold ">small</p>
            </div>
            <div className="flex justify-between p-1 my-1">
              <p className="font-bold">$5</p>
              <button className="bg-yellow-500 w-[50px] text-white rounded-full">
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
