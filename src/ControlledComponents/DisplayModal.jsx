import React from 'react'
import { useState } from 'react'
import ControlledModal from './ControlledModal';

const DisplayModal = () => {
    const [shouldShow, setShouldShow] = useState(false);
    function onRequestClose() {
        setShouldShow(!shouldShow)
    }
    return (
        <div>
            <button onClick={onRequestClose}>{shouldShow ? "Close Modal" : "Show Modal"}</button>
            <ControlledModal onRequestClose={onRequestClose} shouldShow={shouldShow}>
                <h1>Hello from Modal</h1>
            </ControlledModal>
        </div>
    )
}

export default DisplayModal