
const LongUserInfo = ({ user }) => {
    const { name, age, hairColor, hobbies } = user || {};
    console.log(user);

    return user ? (
        <>
            <h3>{name}</h3>
            <p>{age} Years</p>
            <p>{hairColor}</p>
            <h3>Hobbies</h3>
            <ul>{
                hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
            }
            </ul>
        </>
    ) : <p>Loading ...</p>
}

export default LongUserInfo