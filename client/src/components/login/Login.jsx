import './Login.css'
export default function Login() {
    return (<form className="loginForm">
        <h2>LOGN</h2>
        <div className="inputEmailHeandler">
            <input type="text" placeholder="email"></input>
        </div>
        <div className="inputPasswordHeandler">
            <input type="password" placeholder="password"></input>
        </div>
        <button className='onLoginSubmit' type='submit'>LOGIN</button>
    </form>)
}