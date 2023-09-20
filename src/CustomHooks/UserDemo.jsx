
import { useResource } from './useResource';

const UserDemo = ({ userId }) => {
    const user = useResource(`api/users/${userId}`);
    const { name, age } = user || {};
    console.log(user)
    return user ? (
        <>
            <p>Name:{name},Age:{age} Years </p>
        </>
    ) : <p>Loading</p>
}

export default UserDemo