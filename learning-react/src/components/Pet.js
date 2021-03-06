import { useState } from 'react'
import { petDetailsData } from '../lib/petData'
import HeartIcon from './HeartIcon'

export default function Pet() {

    // state of the pet details
    const [petDetails, setPetDetails] = useState(petDetailsData)

    // function that toggles the heart icon
    function changeHeartIcon() {
        setPetDetails(prevPetDetails => {
            return {
                ...prevPetDetails,
                isHeartIconPressed: !prevPetDetails.isHeartIconPressed
            }
        })
    }

    return (
        <div style={{padding: '0.5rem 5rem'}}>
            <h1>Pet (Object in State, Setting state from child component)</h1>

            <div style={{backgroundColor: '#414a4c', width: '20rem', padding: '0.5rem'}}>
                <HeartIcon isPressed={petDetails.isHeartIconPressed} handleClick={changeHeartIcon} />
                <h3>{petDetails.name}</h3>
                <p>Color of the pet is {petDetails.color}</p>
                <p>{petDetails.description}</p>
            </div>
        </div>
    );
}