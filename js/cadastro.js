const btnMobile = document.getElementById('btn-responsivo');
navMenu = document.querySelectorA11('.nav-menu');
function toggleMenu() {
        const nav = document.getElementById('menu');
        nav.classList.toggle('active');
    }
btnMobile.addEventListener('click', toggleMenu);
navMenu.forEach(n => n.addEventListener('click',
toggleMenu));