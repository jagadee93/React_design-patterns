import axios from 'axios';
import React, { useState, useEffect } from 'react'

const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        (async () => {
            const response = await axios.get(resourceUrl, { signal: controller.signal });
            isMounted && setState(response.data)
            console.log(response.data)
        })();

        return () => {
            isMounted = false;
            isMounted && controller.abort();
        }
    }, [resourceUrl])
    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { [resourceName]: state });
                    }
                    return child;
                })
            }
        </>
    )
}

export default ResourceLoader