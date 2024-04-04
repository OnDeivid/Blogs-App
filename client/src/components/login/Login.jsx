import { useNavigate } from 'react-router-dom'

import axios from '../../api/axios'
import useAuthForm from '../../hook/useAuthForm'
import { AuthEndpoints } from '../../CONSTANTS'
import { useContext, useEffect, useState } from 'react'
import { authContext } from '../../context/authContext'
import { formValidation } from '../../hook/formValidation'

import './Login.css'

export default function Login() {

    const navigate = useNavigate()
    const { formValues, onChanegHandle } = useAuthForm({ email: '', password: '' })
    const { setAuth, theme } = useContext(authContext)
    const [formError, setFormError] = useState({})

    async function onLogin(e) {
        e.preventDefault()

        const validationResult = formValidation(formValues)
        setFormError(validationResult)

        if (validationResult.flag) { return }

        try {
            const response = await axios.post(AuthEndpoints.LOGIN, formValues, { headers: { 'Content-type': 'application/json' } })
            const { userData } = response.data
            setAuth(userData)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <form onSubmit={onLogin} className="loginForm">
            <h2>LOGIN</h2>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" value={formValues.email} name='email' placeholder="email"></input>
            </div>
            <p className='ui_error'>{formError.error?.email}</p>

            <div className="lightInput">
                <input onChange={onChanegHandle} type="password" value={formValues.password} name='password' placeholder="password"></input>
            </div>
            <p className='ui_error'>{formError.error?.password}</p>

            <button className='onLoginSubmit' type='submit'>LOGIN</button>
        </form>
    )
}