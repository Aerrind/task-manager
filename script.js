const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const navbtn = document.querySelector('.navbar__btn');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active');
})

navbtn.addEventListener('click', function() {

})