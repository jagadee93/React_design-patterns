
import SplitScreen from './SplitScreen'

const LeftHandComponent = () => {
    return <h1 style={{ backgroundColor: "pink" }}>Left hand Component</h1>
}


const RightHandComponent = () => {
    return <h1 style={{ backgroundColor: "red" }}>Right hand Component</h1>
}
export const SplitScreenInput = () => {
    return (
        <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
    )

}
