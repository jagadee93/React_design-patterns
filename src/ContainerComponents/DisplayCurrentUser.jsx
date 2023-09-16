
import CurrentUserLoader from './CurrentUserLoader'
import LongUserInfo from '../LayoutComponents/ListItems/people/LongUserInfo'

const DisplayCurrentUser = () => {
    return (
        <>
            <h1>Display Current User</h1>
            <CurrentUserLoader>
                <LongUserInfo />
            </CurrentUserLoader>
        </>
    )
}

export default DisplayCurrentUser