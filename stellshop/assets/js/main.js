// global vars on project start
var d = document;
// global vars on project finish

//preloader vars start
var preloader = d.querySelector('.preloader');
//preloader vars finish

// preloader
window.onload = function () {
    d.body.style.cssText = 'overflow: hidden;';
    window.setTimeout(function () {
        preloader.classList.add('hide');
    }, 700);
    window.setTimeout(function () {d.body.style.cssText = 'overflow: auto;';}, 750);
    window.setTimeout(function () {
        preloader.style.cssText = 'display: none;';
        preloader.classList.remove('hide');
        d.body.style.cssText = 'overflow: auto;';
        d.body.removeAttribute( 'style' );
    }, 900);
};