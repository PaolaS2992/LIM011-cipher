window.cipher = {
  // Acá escribe tu código.
  encode: (offset, string) => {
    let resultadoEncriptado = '';
    for (let i = 0; i < string.length; i += 1) {
      // ENGLOBAR "cada letra de la palabra string" EN UNA VARIABLE.
      const palabra = string[i];
      console.log(palabra);

      // CONVERTIR "cada letra de la palabra string" EN CODIGO ASCII
      const codigoAscci = string.charCodeAt(i);
      console.log(codigoAscci);

      // ** VALIDANDO NUMERO POSITIVO **
      if (offset > 0) {
      // ** VALIDANDO LAS LETRAS MAYUSCULAS A = 65 y Z = 90 **
        if (codigoAscci >= 65 && codigoAscci <= 90) {
          // FORMULA PARA ENCONTRAR LA NUEVA POSICIÓN EN EL CODIGO ASCCI.
          const nuevaPosicion = ((codigoAscci - 65 + offset) % 26) + 65;
          console.log(nuevaPosicion);
          // CONVERTIR LA NUEVA POSICIÓN DEL CÓDIGO ASCCI EN LETRA.
          const stringEncriptado = String.fromCharCode(nuevaPosicion);
          console.log(stringEncriptado);
          // IMPRIMIR EN UNA VARIABLE EL ACUMULADO - LA PALABRA ENCRIPTADA.
          resultadoEncriptado += stringEncriptado;
          // ** VALIDANDO LAS LETRAS MINUSCULAS A = 97 y Z = 122 **
        } else if (codigoAscci >= 97 && codigoAscci <= 122) {
          // FORMULA PARA ENCONTRAR LA NUEVA POSICIÓN EN EL CODIGO ASCCI.
          const nuevaPosicion = ((codigoAscci - 97 + offset) % 26) + 97;
          console.log(nuevaPosicion);
          // CONVERTIR LA NUEVA POSICIÓN DEL CÓDIGO ASCCI EN LETRA.
          const stringEncriptado = String.fromCharCode(nuevaPosicion);
          console.log(stringEncriptado);
          // IMPRIMIR EN UNA VARIABLE EL ACUMULADO - LA PALABRA ENCRIPTADA.
          resultadoEncriptado += stringEncriptado;
        } else {
          alert('SOLO INGRESA LETRAS');
          break;
        }
      } else {
        alert('INGRESA UN NRO POSITIVO MAYOR A CERO !!');
        break;
      }
    }
    // IMPRIMIR RESULTADO EN CONSOLA.
    console.log(resultadoEncriptado);
    // RETORNAR ACUMULADO DEL MENSAJE.
    return resultadoEncriptado;
  },

  decode: (offset, string) => {
    let resultadoDesencriptado = '';

    for (let i = 0; i < string.length; i += 1) {
    // ENGLOBAR "cada letra de la palabra string" EN UNA VARIABLE.
      const palabra = string[i];
      console.log(palabra);

      // CONVERTIR "cada letra de la palabra string" EN CODIGO ASCII.
      const codigoAscci = string.charCodeAt(i);
      console.log(codigoAscci);

      // ** VALIDANDO NUMERO POSITIVO **
      if (offset > 0) {
      // ** VALIDANDO LAS LETRAS MAYUSCULA A = 65 y Z = 90 **
        if (codigoAscci >= 65 && codigoAscci <= 90) {
          // FORMULA PARA ENCONTRAR LA NUEVA POSICIÓN EN EL CODIGO ASCCI.
          const nuevaPosicion = ((codigoAscci - 65 - offset + 26 * 2) % 26) + 65;
          console.log(nuevaPosicion);
          // CONVERTIR LA NUEVA POSICIÓN DEL CÓDIGO ASCCI EN LETRA.
          const stringEncriptado = String.fromCharCode(nuevaPosicion);
          console.log(stringEncriptado);
          // IMPRIMIR EN UNA VARIABLE EL ACUMULADO - LA PALABRA ENCRIPTADA.
          resultadoDesencriptado += stringEncriptado;
          // ** VALIDANDO LAS LETRAS MINUSCULAS A = 97 y Z = 122 **
        } else if (codigoAscci >= 97 && codigoAscci <= 122) {
          // FORMULA PARA ENCONTRAR LA NUEVA POSICIÓN EN EL CODIGO ASCCI.
          const nuevaPosicion = ((codigoAscci - 97 - offset + 26 * 2) % 26) + 97;
          console.log(nuevaPosicion);
          // CONVERTIR LA NUEVA POSICIÓN DEL CÓDIGO ASCCI EN LETRA.
          const stringEncriptado = String.fromCharCode(nuevaPosicion);
          console.log(stringEncriptado);
          // IMPRIMIR EN UNA VARIABLE EL ACUMULADO - LA PALABRA ENCRIPTADA.
          resultadoDesencriptado += stringEncriptado;
        } else {
          alert('SOLO INGRESA LETRAS');
          break;
        }
      } else {
      // eslint-disable-next-line no-alert
        alert('INGRESA UN NRO POSITIVO MAYOR A CERO !!');
        break;
      }
    }
    // IMPRIMIR RESULTADO EN CONSOLA.
    console.log(resultadoDesencriptado);

    // RETORNAR ACUMULADO DEL MENSAJE.
    return resultadoDesencriptado;
  },
};
