import React, { createRef, useState } from 'react'
import ControlledOnBoardingFlow from './ControlledOnBoardingFlow'


const StepOne = ({ onNext }) => {
    const nameInputRef = createRef(null);
    return (

        <>
            <h1>Step 1</h1>
            <input type="text" placeholder='enter name ....' name='name' ref={nameInputRef} />
            <button onClick={() => onNext({ name: nameInputRef.current.value })}>Next</button>
        </>
    )
}

const StepTwo = ({ onNext }) => {
    const ageInputRef = createRef(null)
    return (
        <>
            <h1>Step 2</h1>
            <input type="number" placeholder='enter age ....' name='age' ref={ageInputRef} />
            <button onClick={() => onNext({ age: ageInputRef.current.value })}>Next</button>
        </>
    )
}

const StepThree = ({ onNext }) => {
    const hairColorInputRef = createRef(null)
    return (
        <>
            <h1>Step 3</h1>
            <p> Congratulations you are eligible for voter card click on next to proceed...</p>
            <button onClick={() => onNext({})}>Next</button>
        </>
    )
}

const StepFour = ({ onNext }) => {
    const hairColorInputRef = createRef(null)
    return (
        <>
            <h1>Step 4</h1>
            <input type="text" placeholder='enter name ....' name='name' ref={hairColorInputRef} />
            <button onClick={() => onNext({ hairColor: hairColorInputRef.current.value })}>Next</button>
        </>
    )
}


const DisplayControlledOnBoardingFlow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [onBoardingData, setOnBoardingData] = useState({});


    function onNext(stepData) {
        setOnBoardingData({ ...onBoardingData, ...stepData });
        if (currentIndex < 4) {
            setCurrentIndex(currentIndex + 1);
        }


    }


    function onFinish() { //collecting data 
        console.log("i was called")
        console.log(onBoardingData)
    }


    return (
        <>
            <ControlledOnBoardingFlow onFinish={onFinish} currentIndex={currentIndex} onNext={onNext}>
                <StepOne />
                <StepTwo />
                {onBoardingData.age > 18 && <StepThree />}
                <StepFour />
            </ControlledOnBoardingFlow>

        </>
    )
}

export default DisplayControlledOnBoardingFlow