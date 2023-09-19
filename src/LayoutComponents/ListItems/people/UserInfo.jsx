import React from 'react'

const UserInfo = ({ user }) => {
    const { name, age } = user || {};
    console.log(user)
    return user ? (
        <>
            <p>Name:{name},Age:{age} Years </p>
        </>
    ) : <p>Loading</p>
}

export default UserInfo