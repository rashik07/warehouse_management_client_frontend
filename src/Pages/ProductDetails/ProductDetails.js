import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetails from '../../Hooks/useProductDetails';


const ProductDetails = () => {
    const { product_id } = useParams();
    const [product] = useProductDetails(product_id);
    return (
        <div>
              <h2>You are about to book: {product.name}</h2>
        </div>
    );
};

export default ProductDetails;