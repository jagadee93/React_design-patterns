

import { DangerButton, BigSuccessButton } from "./PartiallyApply";
export const DisplayComposition = () => {
    return (
        <div>
            <DangerButton text={"Enter game"} />
            <BigSuccessButton text={"Add Menu"} disabled />

            <DangerButton />
            <BigSuccessButton />
        </div>
    )
}
