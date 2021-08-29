import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsCards from './ProductsCards';

function ProductDataCards() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            {
                data.map(el => {
                    return (
                        <ProductsCards
                            key={el.id}
                            id={el.id}
                            productName={el.productName}
                            image={el.image}
                            from={el.from}
                            nutrients={el.nutrients}
                            quantity={el.quantity}
                            price={el.price}
                            organic={el.organic}
                            description={el.description}
                        />
                    );
                })
            }
        </div>
    );
}

export default ProductDataCards;