const burgerMenu = document.querySelector('#burger-menu');
const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');

openMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.add('burger__active')
});

closeMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.remove('burger__active')
});