import React from 'react'
const LargePersonListItem = ({ person }) => {

    console.log('')
    const { name, age, hairColor, hobbies } = person;
    return (
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
    )
}

export default LargePersonListItem