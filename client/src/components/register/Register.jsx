import './Register.css'
export default function Register() {
    return (<form className="registerForm">
        <h2>REGISTER</h2>
        <div className="inputEmailHandler">
            <input type="text" placeholder="email"></input>
        </div>
        <div className="inputPasswordHandler">
            <input type="password" placeholder="password"></input>
        </div>
        <div className="inputRepeatPasswordHandler">
            <input type="password" placeholder="repeat-password"></input>
        </div>
        <button className='onRegisterSubmit' type='submit'>REGISTER</button>
    </form>)
}
