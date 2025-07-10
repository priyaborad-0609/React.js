import { useState } from "react"

function Counter() {
    const [Counter, setcounter] = useState(0)


    const handleIncrement = () => {
        if (Counter < 20) {
            setcounter(Counter + 1)
        }
    }
    const handleDecrement = () => {
        if (Counter > 0) {
            setcounter(Counter - 1)
        }
    }

    return (
        <div>
            <h1>Counter App</h1>
            <span>{Counter}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => setcounter(0)}>Reset</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter