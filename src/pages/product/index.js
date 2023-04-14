import React from 'react'
import Link from 'next/link';

// replace will replac the last history place 
const ProductList = () => {
  return (
      <div>
        <Link href="/"><h2>Home </h2></Link>  
      <Link href="/product/1">
        <h1>product 1</h1>
      </Link>
      <Link href="/product/2">
        <h1>product 2</h1>
      </Link>
      <Link href="/product/3" replace>
        <h1>product 3</h1>
      </Link>
    </div>
  );
}

export default ProductList;
