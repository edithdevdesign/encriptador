<h1> Encriptador de Texto </h1>
Este proyecto es un encriptador de texto desarrollado como parte del curso "Principiante en Programación G7 - ONE" de Alura Latam. El encriptador permite convertir un texto ingresado por el usuario en un formato encriptado y luego, si se desea, desencriptarlo para recuperar el texto original.

Características
Encriptación de texto: Convierte caracteres específicos en sus equivalentes encriptados, siguiendo las siguientes reglas:

* e se convierte en enter
* i se convierte en imes
* a se convierte en ai
* o se convierte en ober
* u se convierte en ufat
* Desencriptación de texto: Permite revertir el texto encriptado a su forma original, aplicando el proceso inverso.
* Validación de entrada: El encriptador solo acepta letras minúsculas y no permite caracteres especiales.
* Copiar al portapapeles: Después de encriptar o desencriptar el texto, se ofrece la opción de copiar el resultado al portapapeles con un solo clic.

<h2>Tecnologías Utilizadas</h2>

<b>Front-End</b>
* HTML5: Estructura del contenido del encriptador.
* CSS3: Estilos para la interfaz de usuario, incluyendo el diseño responsivo que se adapta a diferentes tamaños de pantalla.
* JavaScript: Funcionalidad interactiva del encriptador, incluida la encriptación, desencriptación, validación de entradas y manejo de eventos en la interfaz de usuario.

<b>Back-End (Lógica de Negocio en JavaScript)</b>
* Manejo de texto: Uso de métodos de cadenas de texto como replaceAll para transformar caracteres en texto encriptado y desencriptado.
* Validación de entrada: Lógica para validar y limpiar las entradas de texto, asegurando que solo se procesen caracteres válidos.
* Manipulación del DOM: Actualización dinámica de la interfaz de usuario basada en las acciones del usuario, como la visualización de mensajes y la manipulación del contenido de los elementos HTML.
