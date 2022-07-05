import { Button } from "antd/lib/radio";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [product] = useProductDetails(product_id);
  const handleUpdateProduct = (event) => {
    // event.preventDefault();
    // alert("some");
    const quantity = product.quantity - 1;

    const updatedProduct = { quantity };

    // send data to the server
    const url = `http://localhost:5000/products/${product_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        window.location.reload()
       
        
      });
  };

  return (
    <div>
      <h2>You are about to book: {product.name}</h2>
      {product.quantity} <br />
      <Button onClick={()=>handleUpdateProduct()}>submit</Button>
    </div>
  );
};

export default ProductDetails;
