import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './productTemplate.css';
import {
    Link
} from "react-router-dom";
function ProductTemplate(props) {
    const search_query = props.history.location.search.replace('?id=', '');
    const [data, setData] = useState({
        image: '',
        from: '',
        nutrients: '',
        quanity: 0,
        price: 0,
        description: ''
    });
    useEffect(() => {
        axios.get(`http://localhost:8080/products?id=${search_query}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <>
            <div className="container">
                <h1>🌽 Node Farm 🥦</h1>

                <figure className="product">
                    {
                        data.organic ?
                            <div className="product__organic"><h5>Organic</h5></div>
                            :
                            <></>
                    }
                    <Link to='/' className="product__back">
                        <span className="emoji-left">👈</span>Back
                    </Link>
                    <div className="product__hero">
                        <span className="product__emoji product__emoji--1">{data.image}</span>
                        <span className="product__emoji product__emoji--2">{data.image}</span>
                        <span className="product__emoji product__emoji--3">{data.image}</span>
                        <span className="product__emoji product__emoji--4">{data.image}</span>
                        <span className="product__emoji product__emoji--5">{data.image}</span>
                        <span className="product__emoji product__emoji--6">{data.image}</span>
                        <span className="product__emoji product__emoji--7">{data.image}</span>
                        <span className="product__emoji product__emoji--8">{data.image}</span>
                        <span className="product__emoji product__emoji--9">{data.image}</span>
                    </div>
                    <h2 className="product__name">{data.productName}</h2>
                    <div className="product__details">
                        <p><span className="emoji-left">🌍</span>From {data.from}</p>
                        <p><span className="emoji-left">❤️</span>{data.nutrients}</p>
                        <p><span className="emoji-left">📦</span>{data.quanity}</p>
                        <p><span className="emoji-left">🏷</span>{data.price}€</p>
                    </div>

                    <a href="/products/cart" className="product__link">
                        <span className="emoji-left">🛒</span>
                        <span>Add to shopping card ({data.price}€)</span>
                    </a>

                    <p className="product__description">
                        {data.description}
                    </p>
                </figure>

            </div>
        </>
    );
}

export default ProductTemplate;