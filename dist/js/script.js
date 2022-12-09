$(document).ready(function () {
    $(".sidepanel__link").hover(
        function () {
            if ($(this).contents('rotatingOut wiggle')) {
                $(this).removeClass('rotatingOut wiggle').addClass('rotatingIn');
            }
        },
        function () {
            if ($(this).contents('rotatingIn wiggle')) {
                $(this).removeClass('rotatingIn wiggle').addClass('rotatingOut');
            setTimeout(() => {
                $(this).addClass('wiggle');
            }, 1000);;
            };
        }
    );
    new WOW().init();
})

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close')
      overlay = document.querySelector('.menu__overlay');
//открытие бургера
hamburger.addEventListener('click', () => {
        menu.classList.add('active');
 });
//закрытие окна по кретику
closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});
//закрытие окна по escape
window.addEventListener("keydown", function (e) {   
    if (e.which == 27) {
        e.preventDefault();
        menu.classList.remove('active')
    }
});
//закрытие окна по оверлею
overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});
//ворк скилл проценты
const counters = document.querySelectorAll('.workskills__statistics-procents'),
      lines = document.querySelectorAll('.workskills__statistics-line');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
