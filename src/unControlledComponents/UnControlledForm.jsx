import React, { createRef } from 'react'

const UnControlledForm = () => {
    const nameInput = createRef();
    const ageInput = createRef();
    const hairColorInput = createRef();

    function handleSubmit(e) {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(hairColorInput.current.value)
        e.preventDefault();

    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameInput} placeholder='Enter name ..' />
            <input type="number" ref={ageInput} placeholder='enter age..' />
            <input type="text" ref={hairColorInput} placeholder='enter haircolor ...' />
            <input type='submit' value="submit" />
        </form>
    )
}

export default UnControlledForm