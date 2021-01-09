// The code below is related to menu icon animation + sidemenu display
const menuIcon = document.querySelector('[data-js="menu-icon"]');
const sideMenu = document.querySelector('[data-js="side-menu"]');

menuIcon.addEventListener('click', _ => {
    menuIcon.classList.toggle('open');
    menuIcon.classList.toggle('active');
    sideMenu.classList.toggle('visible');
});