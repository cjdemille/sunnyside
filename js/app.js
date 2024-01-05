const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('.nav__list-holder')

const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
})

navLinks.forEach((link) => link.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
}))