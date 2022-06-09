import { useState} from 'react'

export default function Box(props) {

    // on state
    const [on, setOn] = useState(props.on) 

    // function that changes the on state
    function changeOn() {
        setOn(prevOn => !prevOn)
    }

    // style
    const style = {
        backgroundColor: on ? "#73777B " : "#ffff",
        padding: '3rem',
    }

    return (
        <div key={props.id} onClick={changeOn} style={style}></div>
    );
}