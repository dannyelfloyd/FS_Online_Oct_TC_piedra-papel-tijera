const opciones = ['piedra','papel','tijera'];
let contadorUsuario = document.getElementById('contador-usuario');
let contadorMaquina = document.getElementById('contador-ordenador');
let resultados = document.getElementById('resultados');
let botones = document.querySelectorAll('.boton-jugada');

let puntosUsuario = 0;
let puntosMaquina = 0;
let resultado;

botones.forEach(boton => {boton.addEventListener('click', iniciar)});
  
function iniciar () {
  obtenerEleccion ()/*
  const eleccionUsurio = obtenerEleccion (); 
  const eleccionMaquina = obtenerAleatoriedad ();
  const resultado = obtenerResultado(eleccionUsurio, eleccionMaquina);
  mostrarResultado (resultado);
  actualizarPuntuación ()*/
}

function obtenerEleccion () {
  let botonPiedra = document.querySelectorAll('.boton-jugada')[0];
  let botonPapel = document.querySelectorAll('.boton-jugada')[1];
  let botonTijera = document.querySelectorAll('.boton-jugada')[2];
  
  if (botones === botonPiedra) {
    alert('piedra');
  } else if (botones === botonPapel) {
    alert('papel');
  } else if (botones === botonTijera) {
    alert('tijera');
  }
/*
  if (botones.dataset.jugada === 'piedra') {
    alert('piedra');
  } else if (botones.dataset.jugada === 'papel') {
    alert('papel');
  } else if (botones.dataset.jugada === 'tijera') {
    alert('tijera');
  }*/
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
    result = 'Empate. Ambos elijieron'+ eleccionUsurio
  } else if (
      (eleccionUsurio === 'piedra' && eleccionMaquina === 'tijera') || 
      (eleccionUsurio === 'papel' && eleccionMaquina === 'piedra') || 
      (eleccionUsurio === 'tijera' && eleccionMaquina === 'papel') 
    ){
      result = 'Ganaste'+ eleccionUsurio + ' gana a ' + eleccionMaquina
      puntosUsuario++
  } else {
    result = 'Perdiste.'+ eleccionMaquina + ' gana a ' + eleccionUsurio
    puntosMaquina++
  }
}

function mostrarResultado () {
  switch (resultado) {
    case gana:
      resultado.innerHTML = 'Has ganado';
      break;
    case pierde:
      resultado.innerHTML ='Has perdido';
      break;
    case empata:
      resultado.innerHTML ='Has empatado';
      break;
  }
}

function actualizarPuntuación () { 
  contadorUsuario.textContent = 'Puntos de la máquina: ' + puntosUsuario;
  contadorMaquina.textContent = 'Tus puntos: ' + puntosMaquina;
}
