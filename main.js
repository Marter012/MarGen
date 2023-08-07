const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 30) {
        nav.classList.add('navbar-change');
    } else {
        nav.classList.remove('navbar-change');
    }
})