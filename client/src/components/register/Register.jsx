import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import FirstForm from './formsRegister/FirstLayer'
import SecondForm from './formsRegister/SecondLayer'
import { AuthEndpoints } from '../../CONSTANTS'
import axios from '../../api/axios'
import useAuthForm from '../../hook/useAuthForm'

import './Register.css'
import { formValidation } from '../../hook/formValidation';


export default function Register() {
    const navigate = useNavigate()
    const [formError, setFormError] = useState({})
    const [formNumber, setFormNumber] = useState(1)
    const { formValues, onChanegHandle } = useAuthForm(
        {
            firstName: '',
            secondName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            repeatPassword: ''
        }

    )

    async function onRegister(e) {

        e.preventDefault()

        if (formNumber <= 2) { setFormNumber(prev => prev + 1) }
        if (formNumber == 2) {

            const validationResult = formValidation(formValues)
            setFormError(validationResult)

            if (validationResult.flag) {
                setFormNumber(1)
                return
            }
            console.log('da')
            try {
                await axios.post(AuthEndpoints.REGISTER, formValues, { headers: { 'Content-type': 'application/json' } })
                setFormNumber(1)
                navigate('/login')
            } catch (err) {
                console.log(err)
                setFormNumber(1)
            }
        }
    }

    const commonProps = {
        formValues,
        onChanegHandle,
        onRegister,
        formError

    };

    return (
        <>
            {formNumber === 1 && <FirstForm {...commonProps} />}
            {formNumber === 2 && <SecondForm {...commonProps} />}
        </>
    )
}
