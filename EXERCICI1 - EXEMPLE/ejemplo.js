console.log("hola!");
let div = document.getElementById("div_text");
div.innerHTML = "Hola HTML <h1> JOEL </h1>"; //interpreta el HTML
// div.innerText = "<h1>Prueba</h1>" no interpreta el html
// alert("Popupfeo alert");  El alert bloquea la WEB

//let numero = window.prompt("Indica un número");
let input_numero = document.getElementById("input_numero");
let numero = input_numero.value;
// --------------------------------------------------------------
let resultat = document.getElementById("resultat");
resultat.innerText = numero;

function sumaValors() {
    //resultat.innerText = input_numero.value;
    let num1 = input_numero.value;
    let num2 = document.getElementById("input_numero2").value;
    if (isNaN(num1)) {
        num1 = 0;
    } if (isNaN(num2)) {
        num2 = 0;
    }
    resultat.innerText = parseFloat(num1) + parseFloat(num2);
}

let audio = document.getElementById("audio");

const timer = document.getElementById("timer");
const timer_span = document.getElementById("timer_span");

function playAudio() {
    audio.play();
    timer.max=audio.duration;
    timer_span.max=audio.duration;
    let ref_interval = window.setInterval(function(){
        timer.value = audio.currentTime;
        timer_span.innerText = audio.currentTime;
        if(audio.currentTime==audio.duration){
            window.clearInterval(ref_interval);
        }
    },1000)
}

function playAudio2() {
    audio.src = "FANFARE1.WAV"
    audio.play();
}

function clk_btn_stopAudio() { //pausa el audio
    audio.pause();
    audio.currentTime=0; //En qué posición se establece el audio.
}

function clk_btn_mute() {
    audio.muted=!audio.muted; //Lo contrario del estado actual.
}

function clk_btn_volUp() { //aumentar volumen de 0 a 1, 1 siendo el total.
    try{
        audio.volume +=0.2;
    }catch(e){
        audio.volume=1;
    }
    document.getElementById("vol").value=audio.volume
}

function clk_btn_volDown() { //Disminuir volumen.
    try{
        audio.volume -=0.2;
    }catch(e){
        audio.volume=0;
    }
    document.getElementById("vol").value=audio.volume //que al darle al boton se modifique la barra range
}

function change_inp_vol(){
    audio.volume = document.getElementById("vol").value //Hacer que el volumen dle audio se mida mediante esta barra
}
//----------------------------------------------------------------

window.setTimeout(
    function(){
        document.getElementById("timer_span").innerText = audio.duration;
    },500
)


//----------------------------------------------------------------

//1. Crea un document HTML amb un div amb id “llista_propietats”. Programa amb JS que es creï una
//llista amb els següents missatges i amb els valors obtinguts dinàmicament:
//a. Valor mínim que pot tenir un número JS
//b. Amplada total de la pantalla
//c. Amplada interna de la finestra
//d. Títol de la web
//e. Hora actual

mostraLlista()
window.setInterval(mostraLlista, 1000) //ejecuta cada cierto tiempo
function mostraLlista() {
    let data = new Date()

    let llista = document.getElementById("llista_propietats");
    llista.innerHTML = `<ol> 
                    <li>Valor mínim que pot tenir un número JS: `+ Number.MIN_VALUE + `</li>
                    <li>Amplada total de la pantalla: `+ screen.width + `</li>
                    <li>Amplaca interna de la finestra: `+ window.innerWidth + `</li>
                    <li>Títol de la web: `+ document.title + `</li>
                    <li>Hora actual: `+ data.getDate()
        + ` / ` + data.getMonth()
        + ` / ` + data.getFullYear() +
        ` - ` + data.getHours()
        + ":" + data.getMinutes()
        + ":" + data.getSeconds() +
        ` </li>
                  </ol>`;
}

// 