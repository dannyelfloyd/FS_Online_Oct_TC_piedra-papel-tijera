const opciones = ['piedra','papel','tijera'];
const opcionesIconos = ['🪨','🗞️','✂️'];
let contadorUsuario = document.getElementById('contador-usuario');
let contadorMaquina = document.getElementById('contador-ordenador');
let resultados = document.getElementById('resultados');
let botones = document.querySelectorAll('.boton-jugada');

let puntosUsuario = 0;
let puntosMaquina = 0;

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
    mostrarResultado (String='Has empatado')
  } else if (
      (eleccionUsurio === 'piedra' && eleccionMaquina === 'tijera') || 
      (eleccionUsurio === 'papel' && eleccionMaquina === 'piedra') || 
      (eleccionUsurio === 'tijera' && eleccionMaquina === 'papel') 
    ){
      mostrarResultado (String='Has ganado')
      actualizarPuntuacion (puntosUsuario++)
  } else {
      mostrarResultado (String='Has perdido')
      actualizarPuntuacion (puntosMaquina++)
  }
}

function mostrarResultado (String) {
  resultados.innerHTML = String;
}

function actualizarPuntuacion () { 
  contadorUsuario.textContent = 'Puntos de la máquina: ' + puntosUsuario;
  contadorMaquina.textContent = 'Tus puntos: ' + puntosMaquina;
}
