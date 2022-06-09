export default function Box(props) {

    // style
    const style = {
        backgroundColor: props.on ? "#73777B " : "#ffff",
        padding: '3rem',
    }

    return (
        <div key={props.id} onClick={() => props.toggleOn(props.id)} style={style}></div>
    );
}