// "use client";

// import { UserContext } from "@/context/MyContext";
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";

// const HomeProduct = () => {

//   const {handleClick}= useContext(UserContext)
//   const [card, setCard] = useState([]);
//   console.log(card);
//   const getapi = async () => {
//     const res = await axios.get("https://dummyjson.com/products");
//     setCard(res.data.products);
//   };
//   useEffect(() => {
//     getapi();
//   }, []);
//   return (
//     <>
//       <div className="container grid grid-cols-5 gap-10">
//         {card.map((curEle, index) => {
//           return (
//             <div key={index}>
//               <div className="container  shadow-lg p-3 gap-10">
//                 <div className="text-center ">
//                   <img src={curEle.images} alt="" className="h-[150px]  " />
//                   <p className="text-xs">{curEle.title}</p>
//                   <p className="text-sm">{curEle.brand}</p>
//                   <div className="flex justify-between items-center">
//                     <p>{curEle.price}</p>
//                     <button  onClick={()=> handleClick(curEle)}  className="bg-yellow-600 w-[60px] rounded-full text-white my-2">
//                       Add
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         }): <div>loading...</div>}
//       </div>
//     </>
//   );
// };

// export default HomeProduct;

"use client";


import { UserContext } from "@/context/MyContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const HomeProduct = () => {
  const { handleClick } = useContext(UserContext);
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  console.log(card);

  const getapi = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setCard(res.data.products);
      setIsLoading(false); // Stop loading when data is fetched
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false); // Stop loading in case of an error
    }
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <>
      <div className="container grid grid-cols-5 gap-10">
        {isLoading ? ( // Check if loading
          // <div className="flex justify-center items-center col-span-5">
          //   <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-yellow-600"></div>
          // </div>
          <button type="button" class="bg-indigo-500 ..." disabled>
            <svg
              class="motion-reduce:hidden animate-spin ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
        ) : (
          card.map((curEle, index) => {
            return (
              <div key={index}>
                <div className="container shadow-lg p-3 gap-10">
                  <div className="text-center">
                    <img src={curEle.images} alt="" className="h-[150px]" />
                    <p className="text-xs">{curEle.title}</p>
                    <p className="text-sm">{curEle.brand}</p>
                    <div className="flex justify-between items-center">
                      <p>{curEle.price}</p>
                      <button
                        onClick={() => handleClick(curEle)}
                        className="bg-yellow-600 w-[60px] rounded-full text-white my-2"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default HomeProduct;
