import { useEffect, useState } from "react";

const useProductDetails = product_id =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/products/${product_id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [product_id]);
    return [product]
}

export default useProductDetails;