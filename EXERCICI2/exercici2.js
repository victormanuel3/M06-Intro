let container_table = document.getElementById("taula_propietats");
container_table.innerHTML = `
    <table> 
        <tr>
            <td>Valor máxim que pot tenir un número JS</td>
            <td>`+ Number.MAX_VALUE + `</td>
        </tr>
        <tr>
            <td>Altura total de la pantalla</td>
            <td>`+ screen.width + `</td>
        </tr>                    
        <tr>
            <td>Altura interna de la finestra</td>
            <td>`+ window.innerHeight + `</td>
        </tr>                    
        <tr>
            <td>URL de la web</td>
            <td>`+ document.URL + `</td>
        </tr>                    
    </table>
    `;

let interval;
let minutos;
let segundos;
const audio = document.getElementById("alarma");
let pausado = false; // Variable para gestionar el estado de pausa

function btn_cuenta_atras() {
    // Obtenemos los valores de los inputs cuando el botón sea clickado.
    minutos = parseInt(document.getElementById("minutos").value);
    segundos = parseInt(document.getElementById("segundos").value);

    // Borrar cualquier intervalo existente para evitar que se ejecuten varios intervalos.
    clearInterval(interval);
    interval = setInterval(cuenta_atras, 1000);
}

function cuenta_atras() {
    if (segundos == 0 && minutos == 0) {
        clearInterval(interval); // Detener cuenta regresiva cuando llegue a 0.
        alarma.play();
        return;
    }

    if (segundos == 0) {
        minutos--;
        segundos = 59;
    } else {
        segundos--;
    }

    // Update the display
    document.querySelector(".cuenta_regresiva").innerText = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
}

//=====================================================================================================================

function pausar() {
    if (!pausado) {
        clearInterval(interval); // Detener el intervalo pero mantener los valores de minutos y segundos
        pausado = true;
    } else {
        // Reanudar la cuenta regresiva si está pausada
        interval = setInterval(cuenta_atras, 1000);
        pausado = false;
    }
}

//=====================================================================================================================

function reestablecer() {
    // Detener el intervalo y restablecer los valores a 0
    clearInterval(interval);
    minutos = 0;
    segundos = 0;

    // Actualizar el display
    document.querySelector(".cuenta_regresiva").innerText = '00:00';

    // Opcional: Restablecer los valores de los inputs también
    document.getElementById("minutos").value = 0;
    document.getElementById("segundos").value = 0;

    pausado = false; // Reiniciar el estado de pausa

    audio.paused();
    audio.currentTime = 0;
}

//=====================================================================================================================

