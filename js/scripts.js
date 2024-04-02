$(function () {

    //CONTROLE DO MENU MOBILE
    $('.mobile_action').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main_header_nav').animate({ 'left': '0px' }, 800);
        } else {
            $(this).removeClass('active');
            $('.main_header_nav').animate({ 'left': '-100%' }, 1000);
        }
    });

    //HEADER
    $(window).scroll(function scroll() {
        $('.main_header').removeClass('fixed')
        if ($(this).scrollTop() > 0) {

            if (!$('.main_header').hasClass('fixed')) {
                $('.main_header').stop().addClass('fixed');
            }
        } else {
            $('.main_header').removeClass('fixed')
        }
    });

    //Scroll Ancora
    var $doc = $('html, body');
    $('.scrollSuave').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});