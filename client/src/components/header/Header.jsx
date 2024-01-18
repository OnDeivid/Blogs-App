import { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import axios from '../../api/axios';
import { AuthEndpoints } from '../../CONSTANTS';
import { authContext } from '../../context/authContext';

import './Header.css'

export default function Header() {
    const [navbarState, setNavbar] = useState(false);
    const { auth, setAuth } = useContext(authContext)
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

    async function onLgout() {
        try {
            await axios.post(AuthEndpoints.LOGOUT)
            setAuth()
            sessionStorage.removeItem('token')
        } catch (err) {
            throw new Error(err)
        }
    }
    return (
        <nav>
            <Link className='toggle-button'>
                <span className='bar' onClick={onMobileToggle}>M</span>
            </Link>
            <ul>
                {navbarState ?
                    auth?._id ?
                        <>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/catalog">Catalog</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li onClick={onLgout}><Link to="/logout">Logout</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    :
                    <>
                        <li><Link></Link></li>
                    </>}

            </ul>
        </nav>
    )
}