
import heartFilledImage from '../images/heart-filled.png'
import heartImage from '../images/heart.png'

// CHILD COMPONENT (Pet <- Parent Component)

export default function StarIcon(props) {

    // variable for the heart icon
    let heartIcon = props.isPressed ? `${heartFilledImage}` : `${heartImage}`

    return (
        <div>
            <img src={`${heartIcon}`} alt="heart" style={{ width: '24px' }} onClick={props.handleClick} />
        </div>
    );
}