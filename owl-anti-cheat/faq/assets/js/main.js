const navbar__toggle = document.querySelector('.navbar__toggle'),
    navbar_ml = document.querySelector('.navbar_ml'),
    logo___ml = document.querySelector('.logo___ml'),
    secondlogo = document.querySelector('.logo_hide_pc'),
    button_hide_pc = document.querySelector('.button_hide_pc');

navbar__toggle.onclick = _ => {
    document.body.style.overflow = 'hidden';
    navbar_ml.classList.add('active');
    [secondlogo, button_hide_pc].map(el => el.classList.add('activef'));
};

button_hide_pc.onclick = _ => {
    navbar_ml.classList.remove('active');
    [navbar__toggle, document.body].map(el => el.removeAttribute('style'));
};

const copyright__info = document.querySelector('.copyright__info');
copyright__info.textContent = `Copyright © 2021-${new Date().getFullYear()} by OWL. All rights reservedocument.`;