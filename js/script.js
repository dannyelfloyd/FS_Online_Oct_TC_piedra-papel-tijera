const opciones = ['piedra','papel','tijera'];
const opcionesIconos = ['🪨','🗞️','✂️'];
let puntosUsuario = 0;
let puntosMaquina = 0;
let botones = document.querySelectorAll('.boton-jugada');
let resultados = document.getElementById('resultados');
let contadorUsuario = document.getElementById('contador-usuario');
let contadorMaquina = document.getElementById('contador-ordenador');

botones.forEach(boton => {boton.addEventListener('click', iniciar)});

function iniciar (e) { 
  const eleccionUsurio = obtenerEleccion (e); 
  const eleccionMaquina = obtenerAleatoriedad (); 
  obtenerResultado(eleccionUsurio, eleccionMaquina);
}

function obtenerEleccion (e) {
  botones.forEach(function (boton) {
    if (e.currentTarget.dataset.jugada == boton.dataset.jugada) {} 
  });
  return e.currentTarget.dataset.jugada;
}

function obtenerAleatoriedad () {
  const numeroAleatorio = Math.floor(Math.random()*3);
  switch (numeroAleatorio) {
    case 0:
      return 'piedra';
    case 1:
      return 'papel';
    case 2:
      return 'tijera';
  }
}

function obtenerResultado (eleccionUsurio, eleccionMaquina) {
  if (eleccionUsurio === eleccionMaquina) {
    mostrarResultado (String='Has empatado 🤝')
  } else if (
      (eleccionUsurio === 'piedra' && eleccionMaquina === 'tijera') || 
      (eleccionUsurio === 'papel' && eleccionMaquina === 'piedra') || 
      (eleccionUsurio === 'tijera' && eleccionMaquina === 'papel') 
    ){
      mostrarResultado (String='Has ganado 👍')
      actualizarPuntuacion (puntosUsuario++)
  } else {
      mostrarResultado (String='Has perdido 👎')
      actualizarPuntuacion (puntosMaquina++)
  }
}

function mostrarResultado (String) {
  resultados.innerHTML = String;/* crear un cuadro donde vaya mostrando como cambia la elección de la maquina
  <div id="resultados">
    <p>Usaste <span class="" id="">papel🗞️</span><br> y la maquina usó <span class="" id="">piedra🪨</span></p>
    <p>¡Ganaste 👍 un punto! 🔥</p>
  </div>*/
}

function actualizarPuntuacion () { 
  contadorUsuario.textContent = '🧝' + puntosUsuario;
  contadorMaquina.textContent = '🤖' + puntosMaquina;
}
