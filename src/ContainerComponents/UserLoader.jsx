import axios from 'axios';
import React, { useState, useEffect } from 'react'
const UserLoader = ({ children, userId }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/users/${userId}`);
            setUser(response.data)
            console.log(response.data)
        })();

    }, [userId])

    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { user })
                    }
                    return child
                })
            }
        </>
    )
}

export default UserLoader