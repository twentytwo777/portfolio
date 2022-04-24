const preloader = document.querySelector('.preloader'),
    nav = document.querySelector('.navbar'),
    nav_links = document.querySelector('.nav-item'),
    howbuy_section = document.querySelector('.howbuy');

window.onload = _ => {
    document.body.style.overflow = 'hidden';
    window.setTimeout(_ => preloader.classList.add('hide'), 1800);
    window.setTimeout(_ => {
        preloader.remove();
        document.body.removeAttribute('style');
    }, 2000);
};

window.onscroll = _ => window.scrollY >= 10 ? nav.style.background = 'rgba(44,44,44)' : nav.removeAttribute('style');