import { RecursiveComponent } from "./RecursiveComponent"

const nestedObject = {
    a: 1,
    b: {
        b1: 4,
        b2: {
            b23: "hello"
        },
        b3: {
            b31: {
                message: "hi",
            },
            b32: {
                message: 'Hello'
            }
        }
    },
    c: {
        c1: 1,
        c2: 2,
    }
}



export const RecursiveFnDemo = () => {
    return (
        <div>
            <RecursiveComponent data={nestedObject} />
        </div>
    )
}
