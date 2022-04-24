const preloader = document.querySelector('.preloader');

window.onload = _ => {
    document.body.style.overflow = 'hidden';
    window.setTimeout(_ => preloader.classList.add('hide'), 700);
    window.setTimeout(_ => {
        preloader.remove();
        document.body.removeAttribute('style');
    }, 900);
};