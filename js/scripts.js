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

    window.addEventListener("scroll", function () {
        var mainHeader = document.querySelector(".main_header")
        mainHeader.classList.toggle("fixed", window.scrollY > 0)
    })

    //Scroll Ancora
    var $doc = $('html, body');
    $('.scrollSuave').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});