import React, { useState } from 'react';
import styled from "styled-components";

const ModalBackground = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.4);

`;

const ModalBody = styled.div`
background-color: #fefefe;
margin: 10% auto;
padding: 20px;
width: 50%;
`;



const ControlledModal = ({ children, shouldShow, onRequestClose }) => {

    return (
        shouldShow ? (
            <ModalBackground onClick={onRequestClose}>
                <ModalBody onClick={(e) => e.stopPropagation()}>
                    {/*stoppropagation is used to prevent the modal from closing because of the event bubbling effect */}
                    <button onClick={onRequestClose}>Close</button>
                    {children}
                </ModalBody>
            </ModalBackground>
        ) : null
    )
}

export default ControlledModal