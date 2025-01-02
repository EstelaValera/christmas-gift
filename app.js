const CORRECT_PASSWORD = "Cochinillo";

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

// document.addEventListener("DOMContentLoaded", () => {
//     const targetDate = new Date("2025-01-06T17:00:00"); 
//     const countdownElement = document.createElement("div");
//     countdownElement.id = "countdown";

//     const bodyElement = document.querySelector("body");
//     bodyElement.prepend(countdownElement);

//     function updateCountdown() {
//         const now = new Date();
//         const difference = targetDate - now;

//         if (difference <= 0) {
//             countdownElement.style.display = "none";
//             return;
//         }

//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         countdownElement.innerHTML = `
//             <p>Esta página estará disponible en:</p>
//             <p>${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos</p>
//         `;
//     }

//     updateCountdown();
//     setInterval(updateCountdown, 1000);
// });


