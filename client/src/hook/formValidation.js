export function formValidation(initialValue) {
    const error = {}
    let flag = false
    if (initialValue.username?.length == 0) {
        error.username = 'username is required'
        flag = true
    }

    if (initialValue.password?.length == 0) {
        error.password = 'password is required'
        flag = true
    }

    if (initialValue.email?.length == 0) {
        error.email = 'email is required'
        flag = true
    }

    return { error, flag }
}