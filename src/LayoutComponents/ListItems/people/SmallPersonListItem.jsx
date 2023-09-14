import React from 'react'

const SmallPersonListItem = ({ person }) => {
    console.log(person)
    const { name, age } = person;
    return (
        <>
            <p>Name:{name},Age:{age} Years </p>
        </>
    )
}

export default SmallPersonListItem