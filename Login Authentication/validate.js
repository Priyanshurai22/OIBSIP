const form = document.getElementById('form')
const name = document.getElementById('name_input')
const email = document.getElementById('email_input')
const password = document.getElementById('password_input')
const cnpassword = document.getElementById('cnpassword_input')
const error_message = document.getElementById('error-mess')

form.addEventListener('submit', (e) => {

    let errors =[]

    if(name_input){
        errors = getSignUpFormErrors(name_input.value, email_input.value, password_input.value, cnpassword_input.value)
    }
    else{
        errors = getLogInFormErrors(email_input.value, password_input.value)
    }


    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(" . ")
    }
})

function getSignUpFormErrors(name, email, password, cnpassword){
    let errors = []

    if(name === '' || name == null){
        errors.push('!! Name is Required')
        name_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('!! Email is Required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('!! Password is Required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push('Password must have atleast 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password != cnpassword){
        errors.push('!! Confirm Password does not match the password')
        password_input.parentElement.classList.add('incorrect')
        cnpassword_input.parentElement.classList.add('incorrect')

    }


    return errors;
}

function getLogInFormErrors(email, password){
    let errors = []

    if(email === '' || email == null){
        errors.push('!! Email is Required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('!! Password is Required')
        password_input.parentElement.classList.add('incorrect')
    }


    return errors;
}
const allinputs = [name_input, email_input, password_input, cnpassword_input].filter(input => input != null)

allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
