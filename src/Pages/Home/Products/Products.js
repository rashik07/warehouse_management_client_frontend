import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Row, Col } from "antd";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 > Products</h1>
      <Row >
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
      <h1 style={{color: 'red'}}> Stock Alerts (Less Than 50)</h1>
      <Row >
        {products.map((product) => (
       
        product.quantity<50 ? <Product key={product._id} product={product}></Product>:""
        ))}
      </Row>
    </div>
  );
};

export default Products;
