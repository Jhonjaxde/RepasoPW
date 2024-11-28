var opcionCorrecta = "drilbur";
var contador = 3;
var intentos = 1;

function verificarRespuesta(idMensaje, idBoton, idMensajeMalo, idIntentos,idImagenP,idImagenR,idPuntaje) {
    
    if (contador > 0) {
        if (document.getElementById(idBoton).textContent === opcionCorrecta) {
            document.getElementById(idMensaje).style.display = 'block';
            document.getElementById(idMensajeMalo).style.display = 'none';
            document.getElementById(idImagenP).style.display='none';
            document.getElementById(idImagenR).style.display='block';
            

        } else {
            contador--;
            intentos++;
            document.getElementById(idMensajeMalo).style.display = 'block';

            document.getElementById(idIntentos).textContent = 'Intentos: ' + intentos + '/3';
            if(contador===1){
                document.getElementById(idPuntaje).textContent = 'Puntaje: 5';
            }

            if(contador===2){
                document.getElementById(idPuntaje).textContent = 'Puntaje: 3';
            }
            if(contador===1){
                document.getElementById(idPuntaje).textContent = 'Puntaje: 1';
            }
            if (contador === 0) {
                alert("Reinicie el juego");
                document.getElementById(idIntentos).textContent = 'Intentos: 3/3';
                document.getElementById(idPuntaje).textContent = 'Puntaje: 5';

            }

        }
    }

}
function reiniciarJuego(idIntentos,idMensaje, idMensajeMalo,idImagenP,idImagenR,idPuntaje) {
    contador = 3;
    intentos = 1;
    document.getElementById(idPuntaje).textContent = 'Puntaje: 5 ';
    document.getElementById(idIntentos).textContent = 'Intentos: ' + intentos + '/3';
    
    document.getElementById(idMensaje).style.display = 'none';
    document.getElementById(idMensajeMalo).style.display = 'none';

    document.getElementById(idImagenP).style.display='block';
    document.getElementById(idImagenR).style.display='none';
}