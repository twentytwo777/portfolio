const d = document;

/* massive buttons */
var navbar__toggle = d.querySelector('.navbar__toggle');
var navbar_ml = d.querySelector('.navbar_ml');
var logo___ml = d.querySelector('.logo___ml');
var secondlogo = d.querySelector('.logo_hide_pc');
var button_hide_pc = d.querySelector('.button_hide_pc');

navbar__toggle.addEventListener('click', function(){
    navbar_ml.classList.add('active');
    secondlogo.classList.add('activef');
    button_hide_pc.classList.add('activef');
    d.body.style.cssText = 'overflow: hidden;';
});

button_hide_pc.addEventListener('click', function(){
    navbar_ml.classList.remove('active');
    navbar__toggle.removeAttribute('style');
    d.body.removeAttribute('style');
});

var DateFunc = new Date();
var copyright__info = d.querySelector('.copyright__info');
var text_data = 'Copyright © 2021-' + DateFunc.getFullYear() + ' by OWL. All rights reserved.';

copyright__info.innerHTML = text_data;