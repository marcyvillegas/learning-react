
import {useState} from 'react'
import ContactsCard from '../components/ContactsCard'
import { contacts } from '../contactsData'

export default function Contacts() {

    // state
    const [contactsTitle, setContactsTitle] = useState("Contacts");

    // function that changes the contact title
    function changeContactsTitle() {
        setContactsTitle("Title is changed");
    }

    // mapping the data
    const cards = contacts.map(item => {
        return <ContactsCard name={item.name} address={item.address} /> // see ContactsCard
    })

    // rendering the mapped data with the component
    return (
        <div className="contacts">
            <h1>{contactsTitle}</h1>

            <button onClick={changeContactsTitle}>Change title</button>

            <div className="contacts__card">
                {cards}
            </div>
        </div>
    );
}