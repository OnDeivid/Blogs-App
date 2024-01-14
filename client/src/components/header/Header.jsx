import './Header.css'
export default function Header() {
    return (
        <nav>
            <ul>
                <li><a to="/login">Login</a></li>
                <li><a to="/register">Register</a></li>
                <li><a to="/">home</a></li>
                <li><a to="/catalog">Catalog</a></li>
                <li><a to="/logout">Logout</a></li>
                <li><a to="/profile">Profile</a></li>
            </ul>
        </nav>
    )
}