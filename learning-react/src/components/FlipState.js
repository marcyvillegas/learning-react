
import { useState } from 'react'

export default function FlipState() {

    // state
    const [flippedValue,setFlippedValue] = useState('Yes');

    // function to change the state
    function flipValue() {
        setFlippedValue(flippedValue === 'Yes' ? 'No' : 'Yes')
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem 5rem'}}>
            <div>
                <h1>Flip State</h1>
            </div>
            <p>{flippedValue}</p>
            <button onClick={flipValue}>Toggle</button>
        </div>
    );
}