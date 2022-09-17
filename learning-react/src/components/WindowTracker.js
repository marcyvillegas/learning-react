import { useState, useEffect } from 'react'

export default function WindowTracker() {
    
    // window width state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    // function that changes the window width state
    useEffect(() => {

        // function that watches the window width 
        function watchWidth() {
            console.log("watching")
            setWindowWidth(window.innerWidth);
        }

        // event listener for the window
        window.addEventListener("resize", watchWidth)

        // Clean up function  
        return function() {
            console.log("cleaning")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return(
        <p>Window width: {windowWidth}</p>
    );
}