
import { useState } from 'react'

export default function Counter() {

    // state
    const [countedNumber, setCountedNumber] = useState(0);


    // function that increases the number
    function increaseNumber() {
        setCountedNumber(countedNumber + 1);
    }

    // function that decreases the number
    function decreaseNumber() {

        if (countedNumber != 0) {
            setCountedNumber(countedNumber - 1);
        }
    }

    return (
        <div className="counter">
            <div>
                <h1>Counter</h1>
            </div>
            <button onClick={decreaseNumber}>Minus</button>
            <h3>{countedNumber}</h3>
            <button onClick={increaseNumber}>Add</button>
        </div>
    );
}