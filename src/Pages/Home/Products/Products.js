import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://floating-spire-21538.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1> Products</h1>
      <Row>
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
      <h1 style={{ color: "red" }}> Stock Alerts (Less Than 50)</h1>
      <Row>
        {products.map((product) =>
          product.quantity < 50 ? (
            <Product key={product._id} product={product}></Product>
          ) : (
            ""
          )
        )}
      </Row>
      <div style={{margin:"10px"}}>
        <h1>Total Items: {products.length}</h1>
        <Link to="/manage">Click Here to view all Items</Link>
      </div>
    </div>
  );
};

export default Products;
