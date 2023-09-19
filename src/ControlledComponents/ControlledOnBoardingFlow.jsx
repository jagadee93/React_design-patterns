import React from 'react'
import { useState } from 'react'

const ControlledOnBoardingFlow = ({ children, onFinish, currentIndex, onNext }) => {


    const currentChild = React.Children.toArray(children)[currentIndex];

    if (children.length - 1 === currentIndex) {
        onFinish()
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { onNext }) // props are to be passed as an object.
    }
    return currentChild
}

export default ControlledOnBoardingFlow