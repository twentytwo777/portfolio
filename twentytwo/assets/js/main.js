const d = document;

const navbar = d.querySelector('.navbar');
const navbar__toggle = d.querySelector('.navbar__toggle');
const navbar_ml = d.querySelector('.navbar_ml');

/*
    Navbar animation
*/

navbar__toggle.addEventListener('click', () => {
    navbar_ml.classList.add('activebef');
    window.setTimeout(() => {
        navbar_ml.classList.toggle('active');
        checkActiveN();
    }, 100);
    window.setTimeout(() => {
        navbar_ml.classList.remove('activebef');
    }, 250);
});

/* 
    check navbar has class active
    or no
*/

function checkActiveN() {
    if (navbar_ml.classList.contains('active')) {
        navbar.style.cssText = 'padding: 30px 0 0 0;';
    } else {
        navbar.removeAttribute('style');
    };
};

/* 
    Mobile adaptation 
    + FUCKING checker
*/

const bros_toglist = d.querySelectorAll('.bros_tog');
const checknMb = setInterval(nMobile, 10);

function nMobile() {
    window.onscroll = () => {
        const sWidth = document.documentElement.clientWidth;
        let wnN = 1294; 
        
        const wn = window.scrollY;
        const wnY = 60;
    
        if (sWidth <= wnN) {
            if (wn >= wnY) {
                navbar.classList.add('nactive');
                for (const itembros of bros_toglist) {
                    itembros.classList.add('acttog');
                };
            } else {
                navbar.classList.remove('nactive');
                for (const itembros of bros_toglist) {
                    itembros.classList.remove('acttog');
                };
            };
        } else {
            navbar.classList.remove('nactive');
            for (const itembros of bros_toglist) {
                itembros.classList.remove('acttog');
            };
        };
    };
};

nMobile();

/* 
    Fucking checker too
*/

const checkInt = setInterval(checkNActiveMobile, 100);
const navbar_link_all = d.querySelectorAll('.navbar_link');

function checkNActiveMobile() {
    for (const nli of navbar_link_all) {
        if (navbar.classList.contains('nactive')) {
            navbar_ml.removeAttribute('style');
            nli.classList.remove('activen');
        } else {
            navbar_ml.style.cssText = 'background: none;';
            nli.classList.add('activen');
        };
    };
};

checkNActiveMobile();

/*
    Advantages animation number
    + check offsetHeight of element
*/

const animAdvantagesInter = setInterval(animAdvantages, 20);
let e = 0;

function animAdvantages() {
    const wSY = window.pageYOffset;
    const object = d.querySelector('.advantages_section-wrap_container-block').offsetHeight;
    const objectNumber = d.querySelector('#number');

    if (wSY >= object) {
        e += 1;
        objectNumber.innerHTML = e;
        if (e >= 50) {
            clearInterval(animAdvantagesInter);
        };
    } else {
        return false;
    };
};

animAdvantages();