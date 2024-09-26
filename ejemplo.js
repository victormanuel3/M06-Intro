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


function playAudio() {
    audio.play();
}

function playAudio2() {
    audio.src = "FANFARE1.WAV"
    audio.play();
}

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
