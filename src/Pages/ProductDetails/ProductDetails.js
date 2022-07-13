import { Button } from "antd/lib/radio";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
import { Layout, Row,Col, Image } from "antd";
const ProductDetails = () => {
  const { product_id } = useParams();
  const [product] = useProductDetails(product_id);
  const handleUpdateProduct = (event) => {
    // event.preventDefault();
    // alert("some");
    const quantity = product.quantity - 1;

    const updatedProduct = { quantity };

    // send data to the server
    const url = `https://floating-spire-21538.herokuapp.com/products/${product_id}`;
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
        window.location.reload();
      });
  };

  const handleIncreaceProduct = (event) => {
    // event.preventDefault();
    // alert("some");
    const quantity = product.quantity + parseInt(event.target.quantity.value);

    const updatedProduct = { quantity };

    // send data to the server
    const url = `https://floating-spire-21538.herokuapp.com/products/${product_id}`;
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
        window.location.reload();
      });
  };

  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px 16px",
            overflow: "initial",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center",
              height: "100vh",
            }}
          >
            
            <Image width={200} src={product.img}></Image>
      
            <h2>Product Name: {product.name}</h2>
            <p>Product Quantity: {product.quantity}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Discription: {product.description}</p>
            <br />
            <Button onClick={() => handleUpdateProduct()}>Delivered</Button>

            <h2>Restock</h2>
            <form onSubmit={handleIncreaceProduct}>
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                required
              />

              <input type="submit" value="Add" />
            </form>
            <Button style={{margin:"10px"}}>
              <Link to="/manage">Manage Inventories</Link>
            </Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ProductDetails;
