import React from 'react'

const NumberedList = ({ resourceName, items, itemComponent: ItemComponent }) => {
    return (
        <>
            {
                items.map((item, i) => {

                    return (
                        <>  <h3>{i}</h3>
                            <ItemComponent key={i} {...{ [resourceName]: item }} />
                        </>
                    )
                })
            }
        </>
    )
}

export default NumberedList