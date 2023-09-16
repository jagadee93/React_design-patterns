
import CurrentUserLoader from './CurrentUserLoader'
import LongUserInfo from '../LayoutComponents/ListItems/people/LongUserInfo'
import UserLoader from './UserLoader'
import ResourceLoader from './ResourceLoader'
import ProductInfo from '../LayoutComponents/ListItems/products/ProductInfo'

const DisplayUserData = () => {
    return (
        <>
            <h1>Display Current User</h1>


            <ResourceLoader resourceName={'user'} resourceUrl={"/api/currentuser"}>
                <LongUserInfo />
            </ResourceLoader>

            <ResourceLoader resourceName={'product'} resourceUrl={"/api/products/1"}>
                <ProductInfo />
            </ResourceLoader>


        </>
    )
}

export default DisplayUserData