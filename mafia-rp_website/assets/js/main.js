const d = document;

var navbar__toggle = d.querySelector('.navbar__toggle');
var navbar_ml = d.querySelector('.navbar_ml');
var secondlogo = d.querySelector('.logo_hide_pc');

navbar__toggle.addEventListener('click', function(){
    navbar_ml.classList.toggle('active');
    secondlogo.classList.add('activef');
});

$(document).mouseup(function (e){
    var div = $(".navbar_ml, .navbar__toggle");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
        $('.navbar_ml').removeClass('active');
    }
});
 
var navbar = d.querySelector('.navbar');
window.onscroll = function() {
    const wn = window.scrollY;
    if (wn >= 1) {
        navbar.classList.add('active_scroll');
    }else {
        navbar.classList.remove('active_scroll');
    }
}

var FunctionDate = new Date();
var footer_wrap_copyright_block_text = d.querySelector('.footer-wrap_copyright-block_text');
var dataText = '© MafiaRP все права защищены 2019-' + FunctionDate.getFullYear();

footer_wrap_copyright_block_text.innerHTML = dataText;