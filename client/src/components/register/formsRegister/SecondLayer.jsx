import '../Register.css'



export default function SecondForm({ formValues, onChanegHandle, onRegister, formError }) {
    return (
        <form onSubmit={onRegister} className="registerForm">
            <h2>REGISTER</h2>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" name='firstName' value={formValues.firstName} placeholder="firstName..."></input>
            </div>
            <p className='ui_error'>{formError.error?.firstName}</p>

            <div className="lightInput">
                <input onChange={onChanegHandle} type="Secondname" name='secondName' value={formValues.secondName} placeholder="SecondName..."></input>
            </div>
            <p className='ui_error'>{formError.error?.secondName}</p>

            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" name='lastName' value={formValues.lastName} placeholder="lastName..."></input>
            </div>
            <p className='ui_error'>{formError.error?.lastName}</p>

            <button className='onRegisterSubmit' type='submit'>REGISTER</button>
        </form>
    )
}