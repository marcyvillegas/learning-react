import { useState } from 'react'

export default function FlipState() {

    // state
    const [flippedValue,setFlippedValue] = useState(true);

    // function to change the state
    function flipValue() {
        setFlippedValue(flippedValue => !flippedValue)
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem 5rem'}}>
            <div>
                <h1>Flip the State</h1>
            </div>
            <p>{flippedValue ? 'Yes' : 'No'}</p>
            <button onClick={flipValue}>Toggle</button>
        </div>
    );
}
