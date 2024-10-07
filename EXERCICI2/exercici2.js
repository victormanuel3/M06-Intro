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
    document.querySelector(".cuenta_regresiva").innerText = (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
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

    audio.pause();
    audio.currentTime = 0;
}

//=====================================================================================================================

let hora_actual = document.querySelector(".hora_actual");


function hora(){
    let data = new Date();
    hora_actual.innerText = data.getHours()+':'+data.getMinutes()+':'+data.getSeconds();
}

window.setInterval(hora, 1000);

//---------------------------------------------------------------------------------------------------------------------

let alarmaSonada = false; // Variable para controlar si la alarma ya ha sonado

function functionAlarma() {
    let data = new Date();
    let alarm_hora_value = parseInt(document.getElementById("alarm_hora").value); //Valor input hora
    let alarm_minuto_value = parseInt(document.getElementById("alarm_minuto").value); //Valor input minuto
    
    if (data.getHours() == alarm_hora_value && data.getMinutes() == alarm_minuto_value) {
        if (!alarmaSonada){  //Si no ha sonado la alarma hace esto.
            const sonido_alarma = document.getElementById("sonido_alarma");
            let audio_select = document.getElementById("audio");
            sonido_alarma.src = audio_select.value; // Establecemos el sonido seleccionado en el select
            sonido_alarma.play();
            alarmaSonada = true; // Marcar que la alarma ha sonado
        }
    } else { //Si ya sono la alarma la hace en false
        alarmaSonada = false;
    }
}

let alarmInterval; // Variable para almacenar el intervalo de la alarma

function verificacionAlarma() {
    // Detener el intervalo anterior si existe
    clearInterval(alarmInterval);
    
    // Iniciar un nuevo intervalo, verificando cada cambio si cada hora es igual o no.
    alarmInterval = window.setInterval(functionAlarma, 1000);
}

//-----------------------------------------------------

function pausar_alarma() {
    const sonido_alarma = document.getElementById("sonido_alarma");
    sonido_alarma.pause();
    sonido_alarma.currentTime = 0; // Reiniciar el tiempo
}