
import SplitScreen from './SplitScreen'

const LeftHandComponent = ({ name }) => {
    return <h1 style={{ backgroundColor: "pink" }}>{name}</h1>
}


const RightHandComponent = ({ name }) => {
    return <h1 style={{ backgroundColor: "red" }}>{name}</h1>
}
export const SplitScreenInput = () => {
    return (
        //passing as  children which gives more flexibility
        <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftHandComponent name={'jagdeesh'} />
            <RightHandComponent name={"webdeveloper"} />
        </SplitScreen>
    )

}
