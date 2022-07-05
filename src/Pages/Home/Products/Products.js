import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Row, Col } from "antd";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
               <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <Row justify="space-around">
 
                    {
                        products.map(product =>  <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
            
            </Row>
        </div>
    );
};

export default Products;