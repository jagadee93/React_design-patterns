import { useState, useEffect } from 'react'

const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState("")
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [hairColor, setHairColor] = useState("");


    useEffect(() => {
        if (name.length < 2) {
            setNameInputError("name must not be less than 2 characters")
        } else {
            setNameInputError('')
        }

    }, [name])

    console.log(name);
    console.log(hairColor);
    return (
        <>
            <form>
                {
                    nameInputError && <p>{nameInputError}</p>
                }
                <input
                    type="text"
                    value={name}
                    placeholder='enter name...'
                    onChange={(e) => setName(e.target.value)}

                />
                <input
                    type="text"
                    value={age}
                    placeholder='enter age ....'
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    value={hairColor}
                    placeholder='enter hair color....'
                    onChange={(e) => setHairColor(e.target.value)}
                />
                <button>Submit</button>


            </form>
            <div className="message">
                <p>Name:{name}</p>
                <p>Age:{age}</p>
            </div>

        </>
    )
}

export default ControlledForm