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

function horario() {
    let diaAtual = new Date()
    let horaAtual = diaAtual.getHours()
    let headerWelcome = document.getElementsByClassName("header_welcome")[0]
    let h2 = document.createElement("h2")

    headerWelcome.appendChild(h2)
    h2.classList.add("title")

    if (horaAtual < 12 && horaAtual > 5) {
        horaAtual = "Bom dia"
    } else if (horaAtual < 18 && horaAtual > 12) {
        horaAtual = "Boa tarde"
    } else {
        horaAtual = "Boa noite"
    }
    h2.innerHTML = `<b class="horario">${horaAtual}</b>, seja bem vindo à <b class="destaque">barbearia Social Barber Shop</b>`

}

horario()