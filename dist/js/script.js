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
})