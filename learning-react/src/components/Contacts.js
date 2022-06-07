
import ContactsCard from '../components/ContactsCard'

export default function Contacts(){
    return(
        <div className="contacts">
            <h1>Contacts</h1>

            <div className="contacts__card">
                <ContactsCard />
            </div>
        </div>
    );
}