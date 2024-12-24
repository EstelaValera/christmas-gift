const CORRECT_PASSWORD = "clave123";

const loginSection = document.getElementById('login');
const contentSection = document.getElementById('content');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('password');
const errorText = document.getElementById('error');

loginBtn.addEventListener('click', () => {
    const inputPassword = passwordInput.value;

    if (inputPassword === CORRECT_PASSWORD) {
        loginSection.style.display = 'none';
        contentSection.style.display = 'flex';
    } else {
        errorText.style.display = 'block';
    }
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        const url = e.currentTarget.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});
