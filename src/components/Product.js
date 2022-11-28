import React from "react";

function Product(props) {

    return (
        <article>
            <span>{props.header}</span>
            <img src={props.imageLocation} alt={props.alt}/>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
        </article>
    );
}

export default Product;