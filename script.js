import { modal_config } from 'config.js';

document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.getElementById('login-link');
    const loginModal = document.getElementById('login-modal');
    const closeButton = document.querySelector('.close-button');
    const loginForm = document.getElementById('login-form');

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para autenticar o usuário
        alert('Formulário de login enviado!');
        loginModal.style.display = 'none';
    });
});

