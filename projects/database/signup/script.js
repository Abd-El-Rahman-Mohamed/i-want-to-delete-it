let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    let password = document.querySelector('input[placeholder="Password"]');
    let passwordConfirm = document.querySelector('input[placeholder="Confirm Password"]');
    if (password.value !== passwordConfirm.value) {
        e.preventDefault();
        password.value = '';
        passwordConfirm.value = '';
        alert('Passwords are not the same!');
    } else {
        window.location.href = 'posts.html';
    }
})