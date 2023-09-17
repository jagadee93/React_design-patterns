
import CurrentUserLoader from './CurrentUserLoader'
import LongUserInfo from '../LayoutComponents/ListItems/people/LongUserInfo'
import UserLoader from './UserLoader'
import ResourceLoader from './ResourceLoader'
import ProductInfo from '../LayoutComponents/ListItems/products/ProductInfo'
import DataSourceLoader from './DataSourceLoader'
import axios from 'axios';
import LocalStorageLoader from './LocalStorageLoader'

const getServerData = (url) => async () => {
    const response = await axios.get(url)
    return response.data
}



const DisplayUserData = () => {
    return (
        <>
            <h1>Display Product info by using DataSourceLoader </h1>

            {/* method 1 
            <DataSourceLoader getDataFunc={async () => {
                const response = await axios.get("/api/products/1")
                return response.data
            }} resourceName={'product'} >
                <ProductInfo />
            </DataSourceLoader>

            <DataSourceLoader getDataFunc={getServerData("/api/products/1")} resourceName={'product'} >
                <ProductInfo />
            </DataSourceLoader> */}

            <LocalStorageLoader />



        </>
    )
}

export default DisplayUserData