const navbar = document.querySelector('.navbar'),
    navbar__toggle = document.querySelector('.navbar__toggle'),
    navbar_ml = document.querySelector('.navbar_ml'),
    secondlogo = document.querySelector('.logo_hide_pc');

navbar__toggle.onclick = _ => {
    navbar_ml.classList.toggle('active');
    secondlogo.classList.add('activef');
};

document.onclick = e => e.target !== navbar_ml && e.target !== navbar__toggle ? navbar_ml.classList.remove('active') : false;

window.onscroll = _ => window.scrollY >= 1 ? navbar.classList.add('active_scroll') : navbar.classList.remove('active_scroll');

const footer_wrap_copyright_block_text = document.querySelector('.footer-wrap_copyright-block_text');
footer_wrap_copyright_block_text.textContent = `© MafiaRP все права защищены 2019-${new Date().getFullYear()}`;