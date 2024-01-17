import '../Register.css'



export default function SecondForm({ formValues, onChanegHandle, onRegister }) {
    return (
        <form onSubmit={onRegister} className="registerForm">
            <h2>REGISTER</h2>
            <div className="inputFirstNameHandler">
                <input onChange={onChanegHandle} type="text" name='firstName' defaultValue={formValues.firstname} placeholder="firstName..."></input>
            </div>
            <div className="inputSecondNameHandler">
                <input onChange={onChanegHandle} type="Secondname" name='secondName' defaultValue={formValues.secondname} placeholder="SecondName..."></input>
            </div>
            <div className="inputLastNameHandler">
                <input onChange={onChanegHandle} type="text" name='lastName' defaultValue={formValues.lastname} placeholder="lastName..."></input>
            </div>
            <button className='onRegisterSubmit' type='submit'>REGISTER</button>
        </form>
    )
}