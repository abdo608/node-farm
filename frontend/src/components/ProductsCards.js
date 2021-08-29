import React from 'react';

function ProductsCards(props) {

    const url = `/product?id=${props.id}`;

    return (
        <figure className="card">
            <div className="card__emoji">{props.image}{props.image}</div>
            <div className="card__title-box">
                <h2 className="card__title">{props.productName}</h2>
            </div>

            <div className="card__details">
                {
                    props.organic ? 
                    <div className='card__detail-box'>
                        <h6 className="card__detail card__detail--organic">Organic!</h6>
                    </div>
                    :
                    <></>
                }

                <div className="card__detail-box">
                    <h6 className="card__detail">{props.quantity} per 📦</h6>
                </div>

                <div className="card__detail-box">
                    <h6 className="card__detail card__detail--price">{props.price}€</h6>
                </div>
            </div>

            <a className="card__link" href={url}>
                <span>Detail <i className="emoji-right">👉</i></span>
            </a>
        </figure>
    );
}

export default ProductsCards;