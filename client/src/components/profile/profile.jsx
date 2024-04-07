import MyCars from './MyCars';
import './Profile.css'
export default function Profile() {
    return (
        <>
            <div className="profile-container">
                <div className="profile">
                    <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
                    <h2 className="profile-name">John Doe</h2>
                    <p className="profile-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className="profile-elements">
                        <li>potato</li>
                    </ul>
                    <button className="add-element-btn" >Add Element</button>
                </div>
            </div>

            <MyCars />
        </>
    );
};