import { useState, useEffect } from 'react';
import WindowTracker from './WindowTracker'

export default function WindowTrackerContainer() {

    // display state
    const [display, setDisplay] = useState(true)

    // function that toggles the display state
    function toggleDisplay() {
        setDisplay(prevDisplay => !prevDisplay)
    }

    return(
        <div style={{padding: '1rem 5rem'}}>
            <h1>Window Tracker Container (Changing local states using useEffect, clean function)</h1>
            <button style={{padding: '0.5rem'}} onClick={toggleDisplay}>Toggle Window Tracker</button>
            {
                display && <WindowTracker />
            }
        </div>
    );
}

