

const ProductInfo = ({ product }) => {
    const { name, price, description, rating } = product || {};
    console.log(product)
    return product ? (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description{description}</h3>
            <p>Average rating:{rating}</p>
        </>
    ) : <p>Loading ....</p>
}

export default ProductInfo