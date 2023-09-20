/* eslint-disable react/display-name */
import axios from "axios";
import { useState, useEffect } from "react";



export const withEditableResource = (Component, resourcePath, ResourceName) => {
    return (props) => {

        const [data, setData] = useState(null);
        const [originalData, setOriginalData] = useState(null);




        useEffect(() => {
            (async () => {
                const response = await axios.get(resourcePath);

                setData(response.data);
                setOriginalData(response.data)
            })();
        }, [])


        function capitalizeFirstLetter(string) {

            return string.charAt(0).toUpperCase() + string.slice(1)
        }


        function onChange(changedData) {
            console.log(changedData);
            setData({ ...data, ...changedData, })
        }


        async function onSave() {
            const response = await axios.post(resourcePath, { [ResourceName]: data });
            setOriginalData(response.data);
            setData(response.data);
        }

        function onReset() {
            setData(originalData)
        }

        const resourceProps = {
            [ResourceName]: data,
            [`onSave${capitalizeFirstLetter(ResourceName)}`]: onSave,
            [`onReset${capitalizeFirstLetter(ResourceName)}`]: onReset,
            [`onChange${capitalizeFirstLetter(ResourceName)}`]: onChange,

        }





        // return <Component {...props} {...{ [ResourceName]: data }} onChange={onChange} onSave={onSave} onReset={onReset} />
        //simplified version of the above 
        return <Component {...props} {...resourceProps} />
    }
};

