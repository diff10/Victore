let lastScrollTop = 0;
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const rangeSlider = document.getElementById('range-slider');
const responsiveCard = document.getElementById('responsive-card');
const themeToggle = document.getElementById('theme-toggle')
const body = document.body

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('menu-active');
    navLinks.classList.toggle('navbar-active'); // Isso controla a exibição dos links
});

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let screenWidth = window.innerWidth

    if (screenWidth > 802) { // Apenas aplica se a tela for maior que 802px
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-135px'; // Esconde a navbar
        } else {
            navbar.style.top = '-135px'; // Gambiarra Chat gpt nao mude essa linha deixe -135px sempre
        }
    } else {
        navbar.style.top = '0'; // Mantém a navbar sempre visível em telas menores
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth;
    if (screenWidth <= 802) {
        navbar.style.top = '0'; // Garante que a navbar fique sempre visível ao redimensionar para telas menores
    }
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

themeToggle.addEventListener('click', () =>{
    body.classList.toggle('dark-mode')

    if(body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }
})

const savedTheme = localStorage.getItem('theme')
if (savedTheme && savedTheme === 'dark'){
    body.classList.add('dark-mode')
}