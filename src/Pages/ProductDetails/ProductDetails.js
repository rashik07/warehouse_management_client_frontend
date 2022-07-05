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
        alert("quantity update successfully!!!");
        window.location.reload()
       
        
      });
  };

  
    const handleIncreaceProduct = (event) => {
      // event.preventDefault();
      // alert("some");
      const quantity = product.quantity + parseInt(event.target.quantity.value) ;
  
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
          alert("quantity update successfully!!!");
          window.location.reload()
         
          
        });
    };

  return (
    <div>
      <h2>Product Name: {product.name}</h2>
      <p>Product Quantity: {product.quantity}</p><br />
      <Button onClick={()=>handleUpdateProduct()}>Delivered</Button>

    
      <form onSubmit={handleIncreaceProduct}>
                <input type="number" name="quantity" placeholder='quantity' required />
                
                <input type="submit" value="Add" />
            
      </form>
    </div>
  );
};

export default ProductDetails;
