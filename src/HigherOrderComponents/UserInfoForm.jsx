import React from 'react'
import { withEditableUser } from './withEditableUser'
export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
        <>
            <label>
                Name:
                <input type='text' value={name} onChange={(e) => onChangeUser({ name: e.target.value })} />
            </label>
            <label>
                age:
                <input type='text' value={age} onChange={(e) => onChangeUser({ age: e.target.value })} />
            </label>
            <label>
                hairColor:
                <input type='text' value={hairColor} onChange={(e) => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <button onClick={onResetUser} >Reset</button>
            <button onClick={onSaveUser}>Save User</button>
        </>
    ) : <p>Loading ...</p>
}, "1");
