import React from "react";
import { useRouter } from "next/router";
//useRouter a next hook to get data ffroom a route
// /product/1
const ProductReviewDetail = () => {
  const router = useRouter();
  const { productId , reviewId} = router.query;

  return (
    <div>
      <h1> details about the product  {productId} and reviews {reviewId} </h1>
    </div>
  );
};

export default ProductReviewDetail;
