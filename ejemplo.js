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

function sumaValors(){
    resultat.innerText = input_numero.value;
}