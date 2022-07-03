import React from 'react';

const Product = ({ product }) => {
    const { _id, name, quantity } = product;
    return (
        <div className='service'>

            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>

            {/* <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button> */}
        </div>
    );
};

export default Product;