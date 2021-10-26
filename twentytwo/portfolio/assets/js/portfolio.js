const wrapbox = d.querySelectorAll('.main_section-portfolio_wrap-box');
const boxtitle = d.querySelectorAll('.main_section-portfolio_wrap-box-title');

function wFunc() {
    wrapbox.forEach((element, index) => {
        wrapbox[index].addEventListener('mouseover', () => {
            boxtitle[index].classList.add('show_boxt');
        });
        wrapbox[index].addEventListener('mouseout', () => {
            boxtitle[index].classList.remove('show_boxt');
        });
    });
};

wFunc();