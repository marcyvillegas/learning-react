
export default function Pet(props) {
    return (
        <div style={{padding: '0.5rem 5rem'}}>
            <h1>Pet (Object in State)</h1>
            <div style={{backgroundColor: '#414a4c', width: '20rem', padding: '0.5rem'}}>
                <img alt="heart" />
                <h3>{props.name}</h3>
                <p>Color of the pet is {props.color}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}