
import DataSourceLoader from './DataSourceLoader'

const LocalStorageLoader = () => {

    const getLocalStorage = key => () => {
        return localStorage.getItem(key)
    }



    const Text = ({ message }) => {
        console.log(message)
        return (<h1>{message} uguuyug</h1>)
    }


    return (
        <>
            <DataSourceLoader getDataFunc={getLocalStorage('message')} resourceName={"message"}>
                <Text />
            </DataSourceLoader>
        </>
    )
}

export default LocalStorageLoader