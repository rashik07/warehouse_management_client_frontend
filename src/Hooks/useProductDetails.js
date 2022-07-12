import { useEffect, useState } from "react";

const useProductDetails = product_id =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://floating-spire-21538.herokuapp.com/products/${product_id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [product_id]);
    return [product]
}

export default useProductDetails;