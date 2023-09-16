import React, { useState, useEffect } from 'react'
import axios from 'axios';
const CurrentUserLoader = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const fetchCurrentUser = async () => {
            const response = await axios.get("/api/currentuser");
            setUser(response.data);
            console.log(response.data)
        }
        fetchCurrentUser();

        return () => {
            console.log("cleanup")
        }

    }, [])


    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) { //safety check to make sure child is a valid react element
                        return React.cloneElement(child, { user }) //clone the child and pass in the user
                    }
                    return child
                })
            }
        </>
    )
}

export default CurrentUserLoader