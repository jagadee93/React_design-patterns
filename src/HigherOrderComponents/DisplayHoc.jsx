
import UserInfo from "../LayoutComponents/ListItems/people/UserInfo"

import { withUser } from "./withUser";

const UserInfoWrapped = withUser(UserInfo, '1');

export const DisplayHoc = () => {
    return (
        <div>
            <UserInfoWrapped />
        </div>
    )
}
