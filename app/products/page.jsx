'use client'

import { UserContext } from '@/context/MyContext'
import React, { useContext } from 'react'


const Products = () => {
  const {value}= useContext(UserContext);
  return (
    <div>
        <h1>my name is mohammad {value}</h1>
      
    </div>
  )
}

export default Products
