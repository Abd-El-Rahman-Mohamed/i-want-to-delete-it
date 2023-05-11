let buttonsWrapper = document.querySelector('#sign-in-and-up-wrapper');
let signinbtn = document.querySelector('#signin');
let signupbtn = document.querySelector('#signup');

function popTheWrapper() {
    buttonsWrapper.parentNode.removeChild(buttonsWrapper);
}

signinbtn.addEventListener('click', popTheWrapper);
signupbtn.addEventListener('click', popTheWrapper);