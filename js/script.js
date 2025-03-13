const opciones = ['Piedra','Papel','Tijera'];
let puntosUser = document.getElementById('contador-usuario');
let puntosPC = document.getElementById('contador-ordenador');
let resultados = document.getElementById('resultados');
const botones = document.querySelectorAll('#boton-jugada');

botones.addEventListener('click', play);
  
function play () {

  opciones.forEach(myFunction);
}
function obtenerResultado () {

}
function mostrarResultado () {

}
function actualizarPuntuación () {

}
