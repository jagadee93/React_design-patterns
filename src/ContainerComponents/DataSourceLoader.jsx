import React, { useState, useEffect } from 'react'

const DataSourceLoader = ({ children, resourceName, getDataFunc = () => { } }) => {

    const [state, setState] = useState(null)

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                const data = await getDataFunc();
                isMounted && setState(data);
            } catch (err) {
                console.log(err)
            }
        })();

        return () => {
            isMounted = false;

        }
    }, [getDataFunc])

    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { [resourceName]: state })
                    }
                    return child
                })
            }
        </>
    )
}

export default DataSourceLoader