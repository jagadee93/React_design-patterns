/* eslint-disable react/display-name */
import axios from "axios";
import { useState, useEffect } from "react"

export const withEditableUser = (Component, userId) => {
    return (props) => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/api/users/${userId}`)
                setOriginalUser(response.data)
                setUser(response.data)
            })();
        }, [])

        const onChangeUser = (changes) => {
            setUser({ ...user, ...changes });
        }


        const onSaveUser = async () => {
            const response = await axios.post(`/api/users/${userId}`, { user });
            console.log(response.data, "user saved")
            setOriginalUser(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalUser)
        }


        return <Component {...props} user={user} onChangeUser={onChangeUser} onSaveUser={onSaveUser} onResetUser={onResetUser} />
    }

}

