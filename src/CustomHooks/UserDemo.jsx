
import axios from 'axios';
import { useDataSource } from './useDataSource';
import { useResource } from './useResource';


const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);

    return response.data;

};


const UserDemo = ({ userId }) => {
    // const user = useResource(`api/users/${userId}`);
    const user = useDataSource(serverResource(`/api/users/${userId}`));


    const { name, age } = user || {};
    console.log(user)

    return user ? (
        <>
            <p>Name:{name},Age:{age} Years </p>
        </>
    ) : <p>Loading</p>
}

export default UserDemo