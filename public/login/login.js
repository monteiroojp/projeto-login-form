//Login script
import { loginContainer, loginForm, loginUsernameInput, loginPasswordInput,  loginVisiblePassword, loginButton, loginErrorTextContainer} from "./variables.js"

//Variables
const url = 'http://localhost:5000/login/'

//Funções
const passwordVisibility = () => {
    if(loginPasswordInput.type == 'password'){
        loginPasswordInput.type = 'text'
        loginVisiblePassword.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }
    else if(loginPasswordInput.type == 'text'){
        loginPasswordInput.type = 'password'
        loginVisiblePassword.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    }
}

const loginReportValidity = () =>{
    return loginForm.reportValidity()
} 

const clearFilds = () => {
    const inputs = [loginUsernameInput, loginPasswordInput]
    inputs.forEach((input) => {
        input.value = ""
    })
}

const clearError = (error) => {
    setTimeout(() => {
        error.remove()
    }, 3000)
    clearFilds()
}

const loginAccount =  async () => {
    if(loginReportValidity()){
        const account = {
            user: loginUsernameInput.value,
            password: loginPasswordInput.value,
        }
        console.log(account)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(account)
        })
    

        if(response.ok){
            window.alert('Loging in...')
            clearFilds()
        }        
        else{
            const errorText = document.createElement('p')
            errorText.setAttribute('id', 'signErrorText')
            errorText.textContent = 'Usuário ou senha incorrretos!'
            loginErrorTextContainer.appendChild(errorText)
            clearError(errorText)
        }
    }
}

//Eventos
loginVisiblePassword.addEventListener('click', passwordVisibility)
loginButton.addEventListener('click', loginAccount)
