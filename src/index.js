// JALAR LOS ELEMENTOS DEL HTML - DOM

// 1°Elementos para ENCRIPTAR
let txtEncriptar = document.getElementById("txtEncriptar");
let txtNroEncriptar = document.getElementById("txtNroEncriptar");
let txtRespuesta1 = document.getElementById("txtRespuesta1");
const btnEncriptar = document.getElementById("btnEncriptar");

// Evento Click para Encriptar.
btnEncriptar.addEventListener("click", () => {
    cadena = txtEncriptar.value;  // bien raro sin let o const funciona.
    posicion = txtNroEncriptar.value;
    if(cadena.length > 0 && posicion.length > 0){
    txtRespuesta1.innerHTML = window.cipher.encode(parseInt(txtNroEncriptar.value), txtEncriptar.value);
    }else{
        alert("INGRESAR AMBOS CAMPOS");
    }
});

// 2° Elementos para pasar a la primera vista.
const btnSgte = document.getElementById("btnSgte");
const inicio = document.getElementById("inicio");
const primeraVista = document.getElementById("primeraVista");

// Evento Click para pasar a la primera vista.
btnSgte.addEventListener("click", () => {
    cadena = txtEncriptar.value;  // bien raro sin let o const funciona.
    posicion = txtNroEncriptar.value;

    //resultado = txtRespuesta1.value; ***************SE TIENE QUE VALIDAR EL RESULTADO********************

    if(cadena.length > 0 && posicion.length > 0){
    inicio.classList.add("hide"); // Ocultas
    primeraVista.classList.remove('hide'); // Muestras.
    }else{
        alert("TIENE QUE ENCRIPTAR");
    }
    
});

// 3° Elementos para DESENCRIPTAR.

let txtDesencriptar = document.getElementById('txtDesencriptar');
let txtNroDesencriptar = document.getElementById('txtNroDesencriptar');
let txtRespuesta2 = document.getElementById("txtRespuesta2");
const btnDesencriptar = document.getElementById('btnDesencriptar');

btnDesencriptar.addEventListener('click', () => {
    cadena = txtDesencriptar.value;
    posicion = txtNroDesencriptar.value;
    if(cadena.length > 0 && posicion.length > 0){
    txtRespuesta2.innerHTML = window.cipher.decode(parseInt(txtNroDesencriptar.value), txtDesencriptar.value);
    }else{
        alert("INGRESAR AMBOS CAMPOS");
    }
});

// 4° Elementos para pasar a la segunda vista.
const btnFin = document.getElementById('btnFin');
const segundaVista = document.getElementById('segundaVista');

// Evento Click para pasar a la segunda vista.
btnFin.addEventListener('click', () => {

    cadena = txtDesencriptar.value;
    posicion = txtNroDesencriptar.value;

    //resultado = txtRespuesta1.value; ***************SE TIENE QUE VALIDAR EL RESULTADO********************
    if(cadena.length > 0 && posicion.length > 0){
    primeraVista.classList.add('hide'); // Ocultas
    segundaVista.classList.remove('hide'); // Muestras
    }else{
        alert("TIENE QUE DESENCRIPTAR"); 
    }
});
