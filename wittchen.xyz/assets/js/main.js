// global var
var d = document;

//preloader website
var preloader = d.querySelector('.preloader');
window.onload = function () {
    d.body.style.cssText = 'overflow: hidden;';
    window.setTimeout(function () {
        preloader.classList.add('hide');
    }, 1800);
    window.setTimeout(function () {d.body.style.cssText = 'overflow: auto;';}, 1950);
    window.setTimeout(function () {
        preloader.style.cssText = 'display: none;';
        preloader.classList.remove('hide');
        d.body.style.cssText = 'overflow: auto;';
        d.body.removeAttribute( 'style' );
    }, 2000);
};

//header anim
var nav = d.querySelector('.navbar');
var nav_links = d.querySelector('.nav-item');
var howbuy_section = d.querySelector('.howbuy');
window.onscroll = function() {
    const wn = window.scrollY;
    if (wn >= 10) {
        nav.style.cssText = 'background: rgba(44,44,44);';
    }else {
        nav.style.cssText = 'background: none;';
    }
}