import { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import axios from '../../api/axios';
import { AuthEndpoints } from '../../CONSTANTS';
import { authContext } from '../../context/authContext';

import './Header.css'

export default function Header() {
    const [navbarState, setNavbar] = useState(false);
    const { auth, setAuth, toggleTheme, theme } = useContext(authContext)
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
    
    function changeTheme() {
        toggleTheme()
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
                
                <li><Link to="/"><img className='logo-home' src='https://seeklogo.com/images/D/d3-logo-c1884590DC-seeklogo.com.png'></img></Link></li>
                {navbarState ?
                    auth?._id ?
                        <>
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

                    </>}
                <div className='themeBtn'>
                    <div className='desk'>
                        <div onClick={changeTheme} className={theme=='dark' ? 'btnChnageThemeDark' : 'btnChnageThemeLight'}>
                        </div>
                        <p className='lightP'><img className='lightImg' src='https://www.svgrepo.com/show/227107/sun.svg'></img></p>
                        <p className='darkP'><img className='darkImg' src='https://www.svgrepo.com/show/123/moon.svg'></img></p>
                    </div>
                </div>
            </ul>
        </nav>
    )
}