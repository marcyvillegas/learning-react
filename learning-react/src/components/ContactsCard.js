
export default function ContactsCard(props) {
    return (
        // properties of the data
        <div className="contacts__carpropd-background">
            <p>{props.name}</p>
            <p>{props.address}</p>
        </div>
    );
}
