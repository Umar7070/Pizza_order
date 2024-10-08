// "use client";
// import { UserContext } from "@/context/MyContext";
// import React, { useContext, useState } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { motion,easeIn } from "framer-motion";

// const Cart = () => {
//   const {
//     addItem,
//     deleteCart,
//     clearAll,
//     incrementHandle,
//     decrementItem,
//     total,
//     setTotal,
//     orderNow,
//   } = useContext(UserContext);

//   const subTotal = addItem.reduce(
//     (curEle, item) => curEle + item.price * item.qnty,
//     0
//   );
//   setTotal(subTotal);
//   return (
//     <>
//       <motion.div
//        initial={{ opacity: 0 }}
//        animate={{
//          opacity: 1,
//          transition: { delay: 1, duration: 1, ease: easeIn },
//        }}

//       className="container mx-auto p-4">
//         <div className="container flex justify-between items-center bg-gray-800 text-white p-2">
//           <span>Cart Calculation</span>
//           <button
//             onClick={clearAll}
//             className="flex items-center bg-red-600 px-4 py-2 rounded"
//           >
//             <span className="mx-2 text-xl">
//               <AiOutlineDelete />
//             </span>
//             <span className="capitalize">empty cart</span>
//           </button>
//         </div>

//         <table className="table-auto w-full mt-2">
//           <thead>
//             <tr className="bg-gray-700 text-white">
//               <th className="border border-gray-300 px-4 py-2 text-center">
//                 Action
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-center">
//                 Product
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-center">
//                 Name
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-center">
//                 Price
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-center">
//                 Qty
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-center">
//                 Total Amount
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {addItem.map((curEle, index) => {
//               return (
//                 <>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-2 text-center">
//                       <AiOutlineDelete
//                         onClick={() => deleteCart(curEle)}
//                         className="text-red-600 mx-auto text-2xl"
//                       />
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2">
//                       <img
//                         src={curEle?.imgdata}
//                         alt="Punjabi"
//                         className="h-10 mx-auto"
//                       />
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center">
//                       {curEle.rname}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center">
//                       {curEle.price }
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center">
//                       <div className="flex  items-center justify-evenly">
//                         <button
//                           onClick={() => decrementItem(curEle)}
//                           className="bg-gray-300 px-2  font-bold text-3xl"
//                         >
//                           -
//                         </button>
//                         <p>{curEle.qnty}</p>
//                         <button
//                           onClick={() => incrementHandle(curEle)}
//                           className="bg-gray-300 px-2  text-2xl"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center">
//                       {curEle.price * curEle.qnty}
//                     </td>
//                   </tr>
//                 </>
//               );
//             })}
//           </tbody>
//         </table>
//         {addItem.length === 0 && (
//           <div className="flex justify-center  items-center my-5">
//             <img src="/img/empty-cart.png" alt="" className="h-[200px] " />
//           </div>
//         )}

//         {addItem.length > 0 && (
//           <>
//           <div className="flex justify-end my-5 ">
//             <p className="capitalize text-2xl font-bold text-gray-500">
//               total price : <span> ₹ {total} </span>
//             </p>

//           </div>

//         <div className="flex justify-end">
//           <button onClick={orderNow}  className="bg-orange-400 p-1 px-4 text-white font-bold rounded-full capitalize">order now</button>
//         </div>
//           </>
//         )}
//       </motion.div>
//     </>
//   );
// };

// export default Cart;

"use client";
import { UserContext } from "@/context/MyContext";
import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { motion, easeIn } from "framer-motion";

const Cart = () => {
  const {
    addItem,
    deleteCart,
    clearAll,
    incrementHandle,
    decrementItem,
    total,
    setTotal,
    orderNow,
  } = useContext(UserContext);

  const subTotal = addItem.reduce(
    (curEle, item) => curEle + item.price * item.qnty,
    0
  );
  setTotal(subTotal);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 1, ease: easeIn },
        }}
        className="container mx-auto p-4"
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center bg-gray-800 text-white p-2 rounded-lg">
          <span>Cart Calculation</span>

          <button
            onClick={clearAll}
            className="flex items-center bg-red-600 px-2 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-base"
          >
            <AiOutlineDelete className="mx-1 md:mx-2 text-lg md:text-xl" />
            <span className="capitalize">empty cart</span>
          </button>
        </div>

        {/* Table for desktop, scrolling div for mobile */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full mt-4">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                  Action
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                  Product
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                  Name
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                  Price
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                  Qty
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                  Total Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {addItem.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                      <AiOutlineDelete
                        onClick={() => deleteCart(curEle)}
                        className="text-red-600 mx-auto text-2xl cursor-pointer"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2">
                      <img
                        src={curEle?.imgdata}
                        alt="Product"
                        className="h-10 mx-auto object-contain"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                      {curEle.rname}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                      ₹{curEle.price}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                      <div className="flex items-center justify-evenly">
                        <button
                          onClick={() => decrementItem(curEle)}
                          className="bg-gray-300 px-2 py-1 font-bold text-xl rounded-md"
                        >
                          -
                        </button>
                        <p>{curEle.qnty}</p>
                        <button
                          onClick={() => incrementHandle(curEle)}
                          className="bg-gray-300 px-2 py-1 font-bold text-xl rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                      ₹{curEle.price * curEle.qnty}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty Cart Image for mobile */}
        {addItem.length === 0 && (
          <div className="flex justify-center items-center my-5">
            <img
              src="/img/empty-cart.png"
              alt="Empty Cart"
              className="h-[150px] w-auto"
            />
          </div>
        )}

        {/* Total and Order Now Button */}
        {addItem.length > 0 && (
          <>
            <div className="flex justify-end my-5">
              <p className="capitalize text-xl md:text-2xl font-bold text-gray-500">
                Total Price: <span>₹{total}</span>
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={orderNow}
                className="bg-orange-400 px-4   hover:bg-yellow-500 py-1 text-white font-bold rounded-full capitalize"
              >
                order now
              </button>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
