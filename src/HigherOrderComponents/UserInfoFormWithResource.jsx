
import { withEditableResource } from './withEditableResource'
//wrapping the component..
export const UserInfoFormWithResource = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    console.log(user)
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


}, "/api/users/1", "user"); //main props
