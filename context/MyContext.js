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
import React, { createContext, useState } from "react";
export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [addItem, setAddItem] = useState([]);

  const addElement = (curEle) => {
    console.log("click me", curEle);
    setAddItem([...addItem, curEle]);
  };
  console.log(addItem)

  return (
    <UserContext.Provider value={{ addItem, setAddItem, addElement }}>
      {children}
    </UserContext.Provider>
  );
};

export default MyContext;
