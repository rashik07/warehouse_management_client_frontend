import React from "react";
import { Avatar, Card, Col } from "antd";
import {  useNavigate } from "react-router-dom";
import { Button } from "antd/lib/radio";


const Product = ({ product }) => {
  const { _id, name, quantity,img } = product;
  const { Meta } = Card;
    const navigate = useNavigate();
  const navigateToProductDetail= (id) => {
    navigate(`/inventory/${id}`)
  }
  return (
    <Col  xs={{ span: 20 }} lg={{ span: 6, offset: 2 }} style={{marginBottom:"10px"}}>
     
      <Card
        style={{
          width: 300,
       
        }}
        cover={
          <img
            alt="example"
            src={img}
          />
        }
      >
        <Meta
    
          title={name}
          description={quantity}
        />
        <Button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'> Update</Button>
      </Card>

      
    </Col>
  );
};

export default Product;
