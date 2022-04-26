import React, {useEffect, useState} from "react";



export default function useFetch() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getProducts = async() => {
            const products = await fetch("http://localhost:3000/products").then(res => res.json());
            setData(products);
        }
        getProducts();
    }, [])
    return data;
}

