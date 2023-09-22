import React from 'react'

export const partiallyApply = (Component, partialProps) => {
    return (props) => {
        <Component {...partialProps} {...props} />
    }
}

export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === "large" ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color
        }} {...props}>{text}</button>
    )
}

const DangerButton = partiallyApply(Button, { color: "red" });
const BigSuccessButton = partiallyApply(Button, { color: "green", size: "large" })


