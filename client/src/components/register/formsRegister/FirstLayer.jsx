import { useState } from 'react'
import '../Register.css'

export default function FirstForm({ formValues, onChanegHandle, onRegister, formError }) {


    return (
        <form onSubmit={onRegister} className="registerForm">
            <h2>REGISTER</h2>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" name='email' value={formValues.email} placeholder="email"></input>
            </div>
            <p className='ui_error'>{formError.error?.email}</p>

            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" name='username' value={formValues.username} placeholder="username"></input>
            </div>
            <p className='ui_error'>{formError.error?.username}</p>

            <div className="lightInput">
                <input onChange={onChanegHandle} type="password" name='password' value={formValues.password} placeholder="password"></input>
            </div>
            <p className='ui_error'>{formError.error?.password}</p>

            <div className="lightInput">
                <input onChange={onChanegHandle} type="password" name='repeatPassword' value={formValues.repeatPassword} placeholder="repeatPassword"></input>
            </div>
            <p className='ui_error'>{formError.error?.repeatPassword}</p>

            <button className='onRegisterSubmit' type='submit'>REGISTER</button>
        </form>
    )
}