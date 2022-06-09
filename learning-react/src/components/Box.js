export default function Box(props) {

    // style
    const style = {
        backgroundColor: props.on ? "#73777B " : "#ffff",
        padding: '3rem',
    }

    return (
        <div key={props.id} onClick={props.toggleOn} style={style}></div>
    );
}