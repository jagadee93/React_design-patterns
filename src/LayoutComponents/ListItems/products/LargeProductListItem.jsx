import React from 'react'

const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (
        <>
            <h3>Product Name{name}</h3>
            <p>{price}</p>
            <h3>Description{description}</h3>
            <p>Average rating:{rating}</p>


        </>
    )
}

export default LargeProductListItem