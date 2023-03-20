const formElement = document.querySelector('.form-container');
const btnLogin = document.querySelector('.login');
const btnLoginmobile = document.querySelector('#login');
const overLay = document.querySelector('.over');

const form_login = document.querySelector('#form-login');
const form_register = document.querySelector('#form-register');
const show_register = document.querySelector('.show-register');
const span_login = document.querySelector('.show-login');

// function showLoginForm(){
btnLogin.addEventListener('click', (e) => {
    formElement.style.display = 'block';
})

btnLoginmobile.addEventListener('click', (e) => {
    formElement.style.display = 'block';
    form_register.style.display = 'none';
    form_login.style.display = 'block';
})


overLay.addEventListener('click', () => {
    formElement.style.display = 'none';
})
// }

// function togglelogin(){
show_register.addEventListener('click', () => {
    form_register.style.display = 'block';
    form_login.style.display = 'none';
})

span_login.addEventListener('click', () => {
    form_register.style.display = 'none';
    form_login.style.display = 'block';
})
// }

// togglelogin;
// showLoginForm;