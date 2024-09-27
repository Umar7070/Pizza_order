"use client";

import React, { createContext, useState } from "react";
export const UserContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyContext = ({ children }) => {
  const [addItem, setAddItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = (curEle) => {
    console.log(curEle, "curEle");
    setAddItem([...addItem, { ...curEle, qnty: 1 }]);
    toast.success("added to your cart", {
      position: "top-center",
      autoClose: 1000,
    });
    setIsAdding(curEle.id);
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  console.log(addItem);

  // deletecart --------------

  const deleteCart = (ele) => {
    const deletItem = addItem.filter((item) => {
      return ele.id !== item.id;
    });
    toast.error("cart item is deleted", {
      position: "top-center",
      autoClose: 1000,
    });
    setAddItem(deletItem);
  };

  // clearAll  -----------------

  const clearAll = () => {
    setAddItem([]);
  };

  const incrementHandle = (curEle) => {
    const incrementItem = addItem.map((item) => {
      return item.id === curEle.id ? { ...item, qnty: (item.qnty += 1) } : item;
    });
    setAddItem(incrementItem);
  };

  // decrementItem

  const decrementItem = (curEle) => {
    if (curEle.qnty === 1) {
      return;
    }
    const decremet = addItem.map((value) => {
      return value.id === curEle.id
        ? { ...value, qnty: (value.qnty -= 1) }
        : value;
    });
    setAddItem(decremet);
  };

  // orderNow

  const orderNow = () => {
    setAddItem([]);
    toast.success("order now successfully", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  return (
    <UserContext.Provider
      value={{
        handleClick,
        addItem,
        setAddItem,
        deleteCart,
        clearAll,
        incrementHandle,
        decrementItem,
        total,
        setTotal,
        orderNow,
        isAdding,
      }}
    >
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MyContext;
