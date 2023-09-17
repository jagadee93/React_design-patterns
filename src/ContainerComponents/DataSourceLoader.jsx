import React, { useState, useEffect } from 'react'

const DataSourceLoader = ({ children, resourceName, getDataFunc = () => { } }) => {

    const [state, setState] = useState(null)

    useEffect(() => {

        (async () => {
            try {
                const data = await getDataFunc();
                setState(data);
            } catch (err) {
                console.log(err)
            }
        })();


    }, [getDataFunc])

    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        console.log(child)
                        return React.cloneElement(child, { [resourceName]: state })
                    }
                    return child
                })
            }
        </>
    )
}

export default DataSourceLoader