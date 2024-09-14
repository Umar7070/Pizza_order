"use client";

import { UserContext } from "@/context/MyContext";
import React, { useContext } from "react";

const Cart = () => {
  const {} = useContext(UserContext);
  return (
    <>
    <div className="container">
      <div>
        <div>
          <img src="/img/peproni.png" alt="" />
        </div>
        <div>
          <p>title</p>
          <p>category</p>
          <p>price</p>
        </div>
      </div>
    </div>
          
      </>
  );
};

export default Cart;
