let lastScrollTop = 0;
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const rangeSlider = document.getElementById('range-slider');
const responsiveCard = document.getElementById('responsive-card');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('menu-active');
    navLinks.classList.toggle('navbar-active'); // Isso controla a exibição dos links
});

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-135px'; // Esconde a navbar ao rolar para baixo
    } else {
        navbar.style.top = '0'; // Mostra a navbar ao rolar para cima
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('mousemove', (e) => {
    const mouseY = e.clientY;

    if (mouseY <= 135) {
        navbar.style.top = '0'; // Mostra a navbar ao mover o mouse perto dela
    } else if (window.pageYOffset > 0) {
        navbar.style.top = '-135px'; // Esconde a navbar se o scroll já foi feito e o mouse não está perto
    }
});

rangeSlider.addEventListener('input', (event) => {
    const newWidth = event.target.value + 'px';
    responsiveCard.style.width = newWidth;
});

