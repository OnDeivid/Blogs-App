import axios from '../../api/axios'
import authForm from '../../hook/authForm'
import { AuthEndpoints } from '../../CONSTANTS'
import './Register.css'

export default function Register() {

    const { formValues, onChanegHandle } = authForm({})

    async function onRegister(e) {
        e.preventDefault()
        try {
            const response = await axios.post(AuthEndpoints.REGISTER, formValues, { headers: { 'Content-type': 'application/json' } })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={onRegister} className="registerForm">
            <h2>REGISTER</h2>
            <div className="inputEmailHandler">
                <input onChange={onChanegHandle} type="text" name='email' defaultValue={formValues.email} placeholder="email"></input>
            </div>
            <div className="inputEmailHandler">
                <input onChange={onChanegHandle} type="text" name='username' defaultValue={formValues.username} placeholder="username"></input>
            </div>
            <div className="inputPasswordHandler">
                <input onChange={onChanegHandle} type="password" name='password' defaultValue={formValues.password} placeholder="password"></input>
            </div>
            <div className="inputRepeatPasswordHandler">
                <input onChange={onChanegHandle} type="password" name='repeatPassword' defaultValue={formValues.repeatPassword} placeholder="repeatPassword"></input>
            </div>
            <button className='onRegisterSubmit' type='submit'>REGISTER</button>
        </form>
    )
}
