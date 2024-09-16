// "use client";

// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// const MyContext = ({ children }) => {
//   const [addItem, setAddItem] = useState([]);
//   const handleclick = (curEle)=>{
//     console.log('func',curEle)
//     alert('click me')
//     setAddItem([...addItem,curEle])
//   }
//   console.log(addItem)
//   return (
//     <UserContext.Provider
//       value={{
//         addItem,
//         setAddItem,
//         handleclick
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default MyContext;
"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { createContext, useState } from "react";
export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [addItem, setAddItem] = useState([]);

  const handleClick = (curEle) => {
    console.log("click me", curEle);
    toast.success('cart added successfully',{
      position:'top-center',
      autoClose:1000
    })
    setAddItem([...addItem, curEle]);
  };
  console.log(addItem)

  // deleteItem

  const deleteItem =(item)=>{
    const del = addItem.filter((ele)=>{
      return item !== ele
    })
    setAddItem(del)
    toast.error('cart delete successfully',{
      position:'top-center',
      autoClose:1000,
    })
  }

  return (
    <UserContext.Provider value={{ addItem, setAddItem, handleClick,deleteItem }}>
      {children}
      <ToastContainer />

    </UserContext.Provider>
    
  );
};

export default MyContext;
