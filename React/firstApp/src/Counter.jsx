import { useState } from "react";


export default function () {
    const [num, setNum] = useState(0);

    const changeNum = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <p>The count is {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}

