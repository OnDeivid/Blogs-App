import './Login.css'
export default function Login() {
    return (<form className="loginForm">
        <h2>LOGN</h2>
        <div className="inputEmailHandler">
            <input type="text" placeholder="email"></input>
        </div>
        <div className="inputPasswordHandler">
            <input type="password" placeholder="password"></input>
        </div>
        <button className='onLoginSubmit' type='submit'>LOGIN</button>
    </form>)
}