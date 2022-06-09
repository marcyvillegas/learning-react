
import { useState } from 'react'
import Count from './Count'
export default function Counter() {

    // state
    const [countedNumber, setCountedNumber] = useState(0);


    // function that increases the number
    function increaseNumber() {
        setCountedNumber(countedNumber + 1);
    }

    // function that decreases the number
    function decreaseNumber() {

        if (countedNumber !== 0) {
            setCountedNumber(countedNumber - 1);
        }
    }

    return (
        <div className="counter">
                <h1 style={{margin: '0'}}>Counter (State as props)</h1>
            <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
                <button onClick={decreaseNumber}>Minus</button>
                <Count number={countedNumber} />
                <button onClick={increaseNumber}>Add</button>
            </div>
        </div>
    );
}