import React, { createRef } from 'react'
import UnControlledOnBoardingFlow from './UnControlledOnBoardingFlow'
import { useState } from 'react'

const DisplayUncontrolledOnBoardingFlow = () => {


    const nameInputRef = createRef(null)


    const StepOne = ({ gotoNext }) => {

        return (

            <>
                <h1>Step 1</h1>
                <input type="text" placeholder='enter name ....' name='name' ref={nameInputRef} />
                <button onClick={() => gotoNext({ name: nameInputRef.current.value })}>Next</button>
            </>
        )
    }

    const StepTwo = ({ gotoNext }) => {
        const ageInputRef = createRef(null)
        return (
            <>
                <h1>Step 2</h1>

                <input type="number" placeholder='enter age ....' name='age' ref={ageInputRef} />
                <button onClick={() => gotoNext({ age: ageInputRef.current.value })}>Next</button>
            </>
        )
    }

    const StepThree = ({ gotoNext }) => {
        const hairColorInputRef = createRef(null)
        return (
            <>
                <h1>Step 3</h1>
                <input type="text" placeholder='enter name ....' name='name' ref={hairColorInputRef} />
                <button onClick={() => gotoNext({ hairColor: hairColorInputRef.current.value })}>Next</button>
            </>
        )
    }

    function onFinish(onBoardingData) {
        console.log(onBoardingData)
    }

    return (
        <div>
            <UnControlledOnBoardingFlow onFinish={onFinish}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UnControlledOnBoardingFlow>
        </div>
    )
}

export default DisplayUncontrolledOnBoardingFlow