// EncenderPlay = document.getElementById('btnBoton')

var PlayEstado = 'apagado';
var boton = document.getElementById('btnBoton');
var sonido = document.getElementById('sonidoPlay');

function estadoBoton(){
    if (PlayEstado == 'apagado') {
        PlayEstado = 'encendida';
        musicPlay();
        boton.classList.add('active');
        console.log('me encendiste');
    } else {
        PlayEstado = 'apagado';
        musicPlay();
        boton.classList.remove('active');
        console.log('me apagaste');
    }
}

function musicPlay(){
    if (sonido.paused){
        sonido.play();
    } else {
        sonido.pause();
    }
}