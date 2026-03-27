function relogio() {

    // Função responsável por converter segundos em formato HH:MM:SS
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        // timeZone UTC para evitar que o fuso horário do usuário interfira no resultado
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        })
    }

    const relogio = document.querySelector(".relogio");

    // Variável que armazena os segundos do cronômetro
    let segundos = 0;

    // Será usada para parar o cronômetro com clearInterval
    let timer;

    function iniciarRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.textContent = getTimeFromSeconds(segundos);
        }, 1000);
    }

    // Delegação de eventos:
    document.addEventListener("click", function (event) {
        const elemento = event.target;

        if (elemento.classList.contains("iniciar")) {
            relogio.classList.remove("pausado");
            clearInterval(timer);
            iniciarRelogio();
        }

        if (elemento.classList.contains("pausar")) {
            relogio.classList.add("pausado");
            clearInterval(timer);
        }

        if (elemento.classList.contains("zerar")) {
            relogio.classList.remove("pausado");
            clearInterval(timer);
            relogio.textContent = "00:00:00"
            segundos = 0;
        }
    })
}

relogio();


