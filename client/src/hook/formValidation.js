export function formValidation(initialValue) {

    const error = {}
    let flag = false

    if (initialValue.username?.length == 0) {
        error.username = 'Username is required'
        flag = true
    } if (initialValue.password?.length == 0) {
        error.password = 'Password is required'
        flag = true
    } if (initialValue.repeatPassword?.length == 0) {
        error.repeatPassword = 'Repeat password is required'
        flag = true
    } if (initialValue.email?.length == 0) {
        error.email = 'Email is required'
        flag = true
    } if (initialValue.firstName?.length == 0) {
        error.firstName = 'First name is required'
        flag = true
    } if (initialValue.secondName?.length == 0) {
        error.secondName = 'Second name is required'
        flag = true
    } if (initialValue.lastName?.length == 0) {
        error.lastName = 'Last name is required'
        flag = true
    }

    return { error, flag }
}