import React from 'react'
import { useState } from 'react'

const UnControlledOnBoardingFlow = ({ children, onFinish }) => {

    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    function gotoNext(stepData) {
        let nextIndex = currentIndex + 1;
        const updatedData = {
            ...onBoardingData,
            ...stepData
        }
        console.log(updatedData)
        if (nextIndex < children.length) {
            setCurrentIndex(nextIndex)
        } else {
            onFinish(updatedData)
        }
        setOnBoardingData(updatedData)
    }

    const currentChild = React.Children.toArray(children)[currentIndex]


    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { gotoNext })
    }
    return currentChild

}

export default UnControlledOnBoardingFlow