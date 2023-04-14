import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
//useRouter a next hook to get data ffroom a route  nested routes 
// /product/1
const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
  const review = "/product/" + productId + "/review/" + productId;
  return (
    <div>
      <h1>
        {" "}
        details about the product {productId} and clik here for the product
        REviews{" "}
      </h1>
      <Link href={review} >
        <h2> Reviews {productId}</h2>
      </Link>
    </div>
  );
}

export default ProductDetail;
