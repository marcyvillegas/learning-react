
import turtlePicture from '../images/tutle.jpg'

export default function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar__logo">
                <img src={turtlePicture} alt="turtle" />
                <h2>Navbar Sample</h2>
            </div>
            
            <ul className="navbar__list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}