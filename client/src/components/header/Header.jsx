import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import './Header.css'
export default function Header() {
    const [navbarState, setNavbar] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 500 });

    useEffect(() => {
        if (!isMobile && window.innerWidth > 500) {
            setNavbar(true)
        }
        if (isMobile && window.innerWidth <= 500) {
            setNavbar(false)
        }
    }, [isMobile])
    function onMobileToggle() {
        setNavbar((prev) => !prev);
    }

    return (
        <nav>
            <a className='toggle-button'>
                <span className='bar' onClick={onMobileToggle}>M</span>
            </a>
            <ul>
                {navbarState ? <>
                    <li><a to="/login">Login</a></li>
                    <li><a to="/register">Register</a></li>
                    <li><a to="/">home</a></li>
                    <li><a to="/catalog">Catalog</a></li>
                    <li><a to="/logout">Logout</a></li>
                    <li><a to="/profile">Profile</a></li>
                </>
                    :
                    <>
                        <li><a></a></li>
                    </>}

            </ul>
        </nav>
    )
}