import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

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
            <Link className='toggle-button'>
                <span className='bar' onClick={onMobileToggle}>M</span>
            </Link>
            <ul>
                {navbarState ? <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </>
                    :
                    <>
                        <li><Link></Link></li>
                    </>}

            </ul>
        </nav>
    )
}