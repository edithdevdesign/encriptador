// Función de validación para inputs que solo deben usar letras minúsculas y sin caracteres especiales
function aplicarValidacion(event) {
    let valorInput = event.target.value;
    
    // Convertir todas las letras a minúsculas
    valorInput = valorInput.toLowerCase();
    
    // Eliminar caracteres no permitidos (excepto letras minúsculas y espacios)
    valorInput = valorInput.replace(/[^a-z\s]/g, '');
    
    // Actualizar el valor del campo con el texto validado
    event.target.value = valorInput;
}

// Función de transformación para encriptar o desencriptar
function transformarTexto(texto, encriptar = true) {
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];

    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (encriptar) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        } else {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return texto;
}

// Función que encripta el texto
function encriptar() {
    let textoParaEncriptar = document.querySelector('.titulo-ingresarTexto').value;

    // Validar si el texto es válido antes de encriptar
    if (textoParaEncriptar === '') {
        actualizarMensajeInfo("Por favor ingrese un texto válido para encriptar.");
        return;
    }

    let textoEncriptado = transformarTexto(textoParaEncriptar, true);

    mostrarTextoResultado(textoEncriptado);
    limpiarCampoTexto(); // Limpiar el campo de texto después de encriptar
    ocultarMensajeIndicacion(); // Ocultar el mensaje de indicación
    restablecerMensajeInfo(); // Restablecer el mensaje de información por defecto
}

// Función que desencripta el texto
function desencriptar() {
    let textoParaDesencriptar = document.querySelector('.titulo-ingresarTexto').value;

    // Validar si el texto es válido antes de desencriptar
    if (textoParaDesencriptar === '') {
        actualizarMensajeInfo("Por favor ingrese un texto válido para desencriptar.");
        return;
    }

    let textoDesencriptado = transformarTexto(textoParaDesencriptar, false);

    mostrarTextoResultado(textoDesencriptado);
    limpiarCampoTexto(); // Limpiar el campo de texto después de desencriptar
    ocultarMensajeIndicacion(); // Ocultar el mensaje de indicación
    restablecerMensajeInfo(); // Restablecer el mensaje de información por defecto
}

// Función que muestra el texto en el área de resultados y hace visible el botón de copiar
function mostrarTextoResultado(texto) {
    let elementoResultado = document.querySelector('.texto-mensajeResultado p:first-child');
    elementoResultado.textContent = texto;

    let botonCopiar = document.querySelector('.boton-copiar');
    botonCopiar.style.display = 'block';  // Muestra el botón de copiar
}

// Función que limpia el campo de texto
function limpiarCampoTexto() {
    document.querySelector('.titulo-ingresarTexto').value = '';
}

// Función que oculta el mensaje de indicación
function ocultarMensajeIndicacion() {
    let mensajeIndicacion = document.querySelector('.texto-mensajeIndicacion');
    if (mensajeIndicacion) {
        mensajeIndicacion.style.display = 'none';
    }
}

// Función que copia el texto encriptado/desencriptado al portapapeles
function copiar() {
    let textoParaCopiar = document.querySelector('.texto-mensajeResultado p:first-child').textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        actualizarMensajeInfo("Texto copiado correctamente.");
        setTimeout(restablecerMensajeInfo, 3000); // Restablece el mensaje después de 3 segundos
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
        actualizarMensajeInfo("Error al copiar el texto.");
        setTimeout(restablecerMensajeInfo, 3000); // Restablece el mensaje después de 3 segundos
    });
}

// Función para actualizar el mensaje de información
function actualizarMensajeInfo(mensaje) {
    let elementoInfo = document.querySelector('#mensajeInfo');
    if (elementoInfo) {
        elementoInfo.textContent = mensaje;
    }
}

// Función para restablecer el mensaje de información a su estado por defecto
function restablecerMensajeInfo() {
    let elementoInfo = document.querySelector('#mensajeInfo');
    if (elementoInfo) {
        elementoInfo.textContent = "No se aceptan caracteres especiales";
    }
}

// Condiciones iniciales: Ocultar el botón de copiar hasta que se encripte o desencripte algo
document.addEventListener('DOMContentLoaded', function() {
    let botonCopiar = document.querySelector('.boton-copiar');
    botonCopiar.style.display = 'none';  // Esconde el botón de copiar inicialmente

    // Añadir la validación al campo de texto
    document.querySelector('.titulo-ingresarTexto').addEventListener('input', aplicarValidacion);
});
