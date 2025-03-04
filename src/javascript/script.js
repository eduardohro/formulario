const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name');
    const inputBox = name.closest('.input-box');
    const nameValue = name.value;

    const errorIcon = '<i class='

    const errorSpan = inputBox.querySelector('.error');

    if (isEmpty(name)) {

    }
})

function isEmpty(value) {
    return value === '';
}

const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
    })
});