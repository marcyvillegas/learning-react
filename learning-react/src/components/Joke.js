import { useState } from 'react'

export default function Joke(props) {

    // isShown state
    const [isShown, setIsShown] = useState(false)

    // function that toggles the isShown state
    function toggleIsShown() {
        setIsShown(prevIsShown => !prevIsShown)
    }

    return (
        <div key={props.id}>
            <h2>{props.setUp}</h2>
            {
                isShown && <p>{props.punchLine}</p>
            }
            <button onClick={toggleIsShown}>{ isShown ? 'Hide' : 'Show' } punchline</button>
        </div>
    );
}