let lastScrollTop = 0;
let navbar = document.getElementById('header');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
        navbar.style.top = '-64px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;

    // adding bg to header
    let hero = document.getElementById('home');
    let heroHt = hero.offsetHeight;
    if(scrollTop >= heroHt) {
        navbar.classList.add('bg-light');
    } else {
        navbar.classList.remove('bg-light');
    }
})