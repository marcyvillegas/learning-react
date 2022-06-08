
import { useState } from 'react'
import ContactsCard from '../components/ContactsCard'
import { contacts } from '../contactsData'

let incrementingNumber = 3;

export default function Contacts() {

    //- Title -----------------------------

    // state of the title
    const [contactsTitle, setContactsTitle] = useState(false);

    // function that changes the contact title
    function changeContactsTitle() {
        setContactsTitle(contactsTitle => !contactsTitle);
    }

    //- Contacts Details ------------------------------

    // state of the contact details
    const [contactsDetails, setContactsDetails] = useState(contacts);

    // function that adds a contact details
    function addContactDetail() {

        let newContactDetail = {
            name: `Person ${incrementingNumber}`,
            address: `Address ${incrementingNumber}`
        }

        setContactsDetails(prevContactsDetails => {
            return [...prevContactsDetails, newContactDetail]
        })

        ++incrementingNumber;
    }

    // mapping the data
    const cards = contactsDetails.map(item => {
        return <ContactsCard key={item.name} {...item} /> // see ContactsCard
    })

    // rendering the mapped data with the component
    return (
        <div className="contacts">
            <h1>{contactsTitle ? 'Titles is changed' : 'Contacts (Array in State)'}</h1>

            <div style={{ display: 'flex', gap: '2rem' }}>
                <button onClick={changeContactsTitle}>Change title</button>
                <button onClick={addContactDetail}>Add a contact details</button>
            </div>

            <div className="contacts__card">
                {cards}
            </div>
        </div>
    );
}

