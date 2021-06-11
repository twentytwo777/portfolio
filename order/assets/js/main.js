var d = document;

//navigation_menu
var btn_open = d.querySelector('.btns');
var btn_close = d.querySelector('.btns_cls')
var menu = d.querySelector('.nav_menu');
var button_open____menu = d.querySelector('.button_open____menu');

btn_open.addEventListener('click', function(){
    btn_open.style.cssText = 'display:none;';
    btn_close.style.cssText = 'display:block; margin-top: 5px;';
    button_open____menu.style.cssText = 'height: 180px; transition: .3s; width: 40px;';
    menu.style.cssText = 'display:block; position: absolute; margin-top: -140px; margin-left: 30px;';
});

btn_close.addEventListener('click', function(){
    btn_open.style.cssText = 'display:block;';
    btn_close.removeAttribute('style');
    button_open____menu.removeAttribute('style');
    menu.removeAttribute('style');
});