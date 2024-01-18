import { useNavigate } from 'react-router-dom'

import axios from '../../api/axios'
import authForm from '../../hook/authForm'
import { AuthEndpoints } from '../../CONSTANTS'

import './Login.css'

export default function Login() {

    const navigate = useNavigate()
    const { formValues, onChanegHandle } = authForm({ email: '', password: '' })

    async function onLogin(e) {
        e.preventDefault()
        try {
            const response = await axios.post(AuthEndpoints.LOGIN, formValues, { headers: { 'Content-type': 'application/json' } })
            const { userData } = response.data
            console.log(userData)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <form onSubmit={onLogin} className="loginForm">
            <h2>LOGN</h2>
            <div className="inputEmailHandler">
                <input onChange={onChanegHandle} type="text" name='email' placeholder="email"></input>
            </div>
            <div className="inputPasswordHandler">
                <input onChange={onChanegHandle} type="password" name='password' placeholder="password"></input>
            </div>
            <button className='onLoginSubmit' type='submit'>LOGIN</button>
        </form>
    )
}