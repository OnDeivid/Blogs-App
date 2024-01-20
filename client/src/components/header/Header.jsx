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
                <img src='https://cdn-icons-png.flaticon.com/128/14063/14063266.png'></img>
                {navbarState ?
                    auth?._id ?
                        <>
                            <li><Link to="/">HOME</Link><div className='underLine'></div></li>
                            <li><Link to="/catalog">CATALOG</Link><div className='underLine'></div></li>

                            <li><Link to="/profile">PROFILE</Link><div className='underLine'></div></li>
                            <li onClick={onLgout}><Link to="/logout">LOGOUT</Link><div className='underLine'></div></li>
                        </>
                        :
                        <>
                            <li><Link to="/register">REGISTER</Link><div className='underLine'></div></li>
                            <li><Link to="/login">LOGIN</Link><div className='underLine'></div></li>
                        </>
                    :
                    <>
                        <li><Link></Link></li>
                    </>}

            </ul>
        </nav>
    )
}