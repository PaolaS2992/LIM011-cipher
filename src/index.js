const txtEncriptar = document.getElementById('txtEncriptar');
const txtNroEncriptar = document.getElementById('txtNroEncriptar');
const txtRespuesta1 = document.getElementById('txtRespuesta1');
const btnEncriptar = document.getElementById('btnEncriptar');

btnEncriptar.addEventListener('click', () => {
  const cadena = txtEncriptar.value;
  const posicion = txtNroEncriptar.value;
  if (cadena.length > 0 && posicion.length > 0 && parseInt(posicion, 10) > 0) {
    txtRespuesta1.innerHTML = window.cipher.encode(parseInt(txtNroEncriptar.value, 10),
      txtEncriptar.value);
  } else {
    txtRespuesta1.innerHTML = 'Ingresar los datos y offset positivo';
  }
});

const btnSgte = document.getElementById('btnSgte');
const inicio = document.getElementById('inicio');
const primeraVista = document.getElementById('primeraVista');

btnSgte.addEventListener('click', () => {
  const cadena = txtEncriptar.value;
  const posicion = txtNroEncriptar.value;
  if (cadena.length > 0 && posicion.length > 0) {
    inicio.classList.add('hide');
    primeraVista.classList.remove('hide');
  } else {
    txtRespuesta1.innerHTML = 'TE FALTA ENCRIPTAR';
  }
});

const txtDesencriptar = document.getElementById('txtDesencriptar');
const txtNroDesencriptar = document.getElementById('txtNroDesencriptar');
const txtRespuesta2 = document.getElementById('txtRespuesta2');
const btnDesencriptar = document.getElementById('btnDesencriptar');

btnDesencriptar.addEventListener('click', () => {
  const cadena = txtDesencriptar.value;
  const posicion = txtNroDesencriptar.value;
  if (cadena.length > 0 && posicion.length > 0 && parseInt(posicion, 10) > 0) {
    txtRespuesta2.innerHTML = window.cipher.decode(parseInt(txtNroDesencriptar.value, 10),
      txtDesencriptar.value);
  } else {
    txtRespuesta2.innerHTML = 'Ingresar los datos y offset positivo';
  }
});

const btnFin = document.getElementById('btnFin');
const segundaVista = document.getElementById('segundaVista');

btnFin.addEventListener('click', () => {
  const cadena = txtDesencriptar.value;
  const posicion = txtNroDesencriptar.value;
  if (cadena.length > 0 && posicion.length > 0) {
    primeraVista.classList.add('hide');
    segundaVista.classList.remove('hide');
  } else {
    txtRespuesta2.innerHTML = 'TE FALTA DESENCRIPTAR';
  }
});
