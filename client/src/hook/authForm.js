import { useState } from "react"

export default function authForm(initialValue) {
    const [formValues, setFormValues] = useState(initialValue)

    function onChanegHandle(e) {
        setFormValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return {
        formValues, onChanegHandle
    }
}