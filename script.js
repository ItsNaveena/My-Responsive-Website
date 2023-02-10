let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navbarList = document.querySelector('.navbarList');
let search = document.querySelector('.search');

burger.addEventListener('click', ()=>{

    search.classList.toggle('navListResponsive');
    navbarList.classList.toggle('navListResponsive');
    navbar.classList.toggle('navResponsive');

})
