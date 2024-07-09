(function () {
    // Começa o abre e fecha o menu do mobile
    let mobile_action = document.querySelector(".mobile_action")
    mobile_action.addEventListener("click", function () {
        let main_header_nav = document.querySelector(".main_header_nav")
        main_header_nav.classList.toggle("main_header_nav-abrir")
    })
    // Termina o abre e fecha o menu do mobile

    // Começa o fixa o menu
    window.addEventListener("scroll", function () {
        var mainHeader = document.querySelector(".main_header")
        mainHeader.classList.toggle("fixed", window.scrollY > 30)
    })
    // Termina o fixa o menu


    //Scroll Ancora
    // let $doc = $('html, body');
    // $('.scrollSuave').click(function () {
    //     $doc.animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 1000);
    //     return false;
    // });

    // Começa o define o horario de boas vindas
    function horario() {
        let diaAtual = new Date()
        let horaAtual = diaAtual.getHours()
        let headerWelcome = document.getElementsByClassName("header_welcome")[0]
        let h2 = document.createElement("h2")

        headerWelcome.appendChild(h2)
        h2.classList.add("title")

        if (horaAtual > 5 && horaAtual < 12) {
            horaAtual = "Bom dia"
        } else if (horaAtual < 18) {
            horaAtual = "Boa tarde"
        } else {
            horaAtual = "Boa noite"
        }
        h2.innerHTML = `<b class="horario">${horaAtual}</b>, seja bem vindo à <b class="destaque">barbearia Social Barber Shop</b>`

    }
    horario()
    // Termina o define o horario de boas vindas

    //Começa itens entrando suavemente
    const elements = document.querySelectorAll(".elements")

    const myObserver = new IntersectionObserver((teste) => {
        teste.forEach((teste2) => {
            if (teste2.isIntersecting) {
                return teste2.target.classList.add("show")
            } else {
                return teste2.target.classList.remove("show")
            }
        })
    })

    elements.forEach((servico) => myObserver.observe(servico))
    //Termina itens entrando suavemente

}());
