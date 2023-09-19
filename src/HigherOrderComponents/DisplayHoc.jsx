
import { printProps } from "./printProps";
import UserInfo from "../LayoutComponents/ListItems/people/UserInfo"
const UserInfoWrapped = printProps(UserInfo)

export const DisplayHoc = () => {
    return (
        <div>
            <UserInfoWrapped a={1} b={2} obj={{ name: "jag" }} />
        </div>
    )
}
