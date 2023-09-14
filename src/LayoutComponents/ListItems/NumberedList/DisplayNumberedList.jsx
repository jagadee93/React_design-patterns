import React from 'react'
import products from "./data.json";
import NumberedList from './NumberedList';
import LargeProductListItem from '../products/LargeProductListItem';
import SmallProductListItem from '../products/SmallProductListItem';
const DisplayNumberedList = () => {
    return (
        <div>
            <NumberedList resourceName={"product"} items={products} itemComponent={LargeProductListItem} />
            <NumberedList resourceName={"product"} items={products} itemComponent={SmallProductListItem} />
        </div>
    )
}

export default DisplayNumberedList