
import CurrentUserLoader from './CurrentUserLoader'
import LongUserInfo from '../LayoutComponents/ListItems/people/LongUserInfo'
import UserLoader from './UserLoader'

const DisplayCurrentUser = () => {
    return (
        <>
            <h1>Display Current User</h1>
            <CurrentUserLoader>
                <LongUserInfo />
            </CurrentUserLoader>

            <h2>Displaying User By id </h2>

            <UserLoader userId={1}>
                <LongUserInfo />
            </UserLoader>
            <UserLoader userId={4}>
                <LongUserInfo />
            </UserLoader>


        </>
    )
}

export default DisplayCurrentUser