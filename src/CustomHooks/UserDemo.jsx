
import { useUser } from './useUser';
const UserDemo = ({ userId }) => {
    const user = useUser(3);
    const { name, age } = user || {};
    console.log(user)
    return user ? (
        <>
            <p>Name:{name},Age:{age} Years </p>
        </>
    ) : <p>Loading</p>
}

export default UserDemo