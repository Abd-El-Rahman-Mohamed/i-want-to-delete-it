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
    container.innerHTML += '<section id="signin-form-container"><form action="signin.php"><h2>Log in</h2><input type="email" name="email" id="email" placeholder="Email" required><input type="password" name="password" id="password" placeholder="Password" required><button type="submit" class="block">Login</button></form></section>';
    style.innerHTML += "#signin-form-container {width: 20vw;height: 50vh;margin: 0 auto;position: relative;top: 25%;display: flex;gap: 2vh;flex-direction: column;background-color: transparent;backdrop-filter: blur(0.2vw);box-shadow: 0.07vw 0.07vw 0.07vw 0.07vw;border: 0.1vw outset white;border-radius: 3%;}form h2, form {text-align: center;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size: 3vw;color: #131026ff;}form button{width: 8vw;height: 5vh;display: block;margin: 2vh auto;align-self: center;font-size: 1.3vw;background: linear-gradient(to top, #09203f 0%, #537895 100%);color: white;box-shadow: none;border: 0.1vw solid #555555;border-radius: 25vw;} p {text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif;}"
    
    let signinFormContainer = document.querySelector('#signin-form-container');
    
    let NotAUserSignUp = document.createElement('p');
    NotAUserSignUp.innerText = 'Not a user? ';
    
    let signupAnchor = document.createElement('a');
    signupAnchor.innerText = 'Sign Up';
    signupAnchor.setAttribute('href', '#');
    signupAnchor.setAttribute('id', 'go-to-signup');
    
    signinFormContainer.appendChild(NotAUserSignUp);
    NotAUserSignUp.appendChild(signupAnchor);
    
    signupAnchor.addEventListener('click', () => {signinFormContainer.parentNode.removeChild(signinFormContainer)});
    signupAnchor.addEventListener('click', buildASignupForm);
}

function buildASignupForm() {
    container.innerHTML += '<section id="signup-form-container"><form action="signup.php"><h2>Sign up</h2><input type="email" name="email" id="email" placeholder="Email" required><input type="password" name="password" id="password" placeholder="Password" required><input type="password" name="password" id="password" placeholder="Confirm Password" required><button type="submit" class="block">Sign Up</button></form></section>';
    style.innerHTML += "#signup-form-container {width: 20vw;height: 60vh;margin: 0 auto;position: relative;top: 25%;display: flex;gap: 2vh;flex-direction: column;background-color: transparent;backdrop-filter: blur(0.2vw);box-shadow: 0.7vw 0.7vw 0.7vw 0.7vw;border: 0.1vw outset white;border-radius: 3%;}form h2, form {text-align: center;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size: 3vw;color: #131026ff;}p {text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif;}form button{width: 8vw;height: 5vh;display: block;margin: 2vh auto;align-self: center;font-size: 1.3vw;background: linear-gradient(to top, #09203f 0%, #537895 100%);color: white;box-shadow: none;border: 0.1vw solid #555555;border-radius: 25vw;}";
    
    var signupFormContainer = document.querySelector('#signup-form-container');
    
    var AlreadyAUser = document.createElement('p');
    AlreadyAUser.innerText = 'Already a user? ';
    
    var loginAnchor = document.createElement('a');
    loginAnchor.innerText = 'Login';
    loginAnchor.setAttribute('href', '#');
    loginAnchor.setAttribute('id', 'go-to-login');
    
    AlreadyAUser.appendChild(loginAnchor);
    signupFormContainer.appendChild(AlreadyAUser);
    
    loginAnchor.addEventListener('click', () => {signupFormContainer.parentNode.removeChild(signupFormContainer)});
    loginAnchor.addEventListener('click', buildASigninForm);
}

signinbtn.addEventListener('click', popTheWrapper);
signinbtn.addEventListener('click', buildASigninForm);

signupbtn.addEventListener('click', popTheWrapper);
signupbtn.addEventListener('click', buildASignupForm);

