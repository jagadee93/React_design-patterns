import React from 'react'
import { DangerButton, BigSuccessButton } from "./Composition"


export const DisplayComposition = () => {
    return (
        <div>
            <DangerButton text={"Enter game"} />
            <BigSuccessButton text={"Add Menu"} disabled />
        </div>
    )
}
