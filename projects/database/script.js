let head = document.querySelector('head');
let style = document.createElement('style');
head.appendChild(style);

let container = document.querySelector('#container');
let buttonsWrapper = document.querySelector('#sign-in-and-up-wrapper');
let signinbtn = document.querySelector('#signin');
let signupbtn = document.querySelector('#signup');

function popTheWrapper() {
    buttonsWrapper.parentNode.removeChild(buttonsWrapper);
}

function buildASigninForm() {
    window.location.href = 'login/login.html';
}

function buildASignupForm() {
    window.location.href = 'signup/signup.html';
}

signinbtn.addEventListener('click', buildASigninForm);
signupbtn.addEventListener('click', buildASignupForm);