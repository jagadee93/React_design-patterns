import React from 'react'

const UserInfo = ({ user }) => {
    const { name, age } = user;
    return (
        <>
            <p>Name:{name},Age:{age} Years </p>
        </>
    )
}

export default UserInfo