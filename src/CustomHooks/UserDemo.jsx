import React from 'react'
import { useCurrentUser } from './useCurrentUser';
const UserDemo = () => {
    const user = useCurrentUser();
    const { name, age } = user || {};
    console.log(user)
    return user ? (
        <>
            <p>Name:{name},Age:{age} Years </p>
        </>
    ) : <p>Loading</p>
}

export default UserDemo