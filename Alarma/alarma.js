/*
//Página alarma
let inputhoras = document.getElementById('horas');
let inputminutos = document.getElementById('minutos');
let btnEstablecerAlarma = document.getElementById('btnEstablecer');
let btnDetener = document.getElementById('btnDetener');
let sonidoAlarma = document.getElementById('sonidoAlarma');

//Prueba de sonido
const selectorSonido = document.getElementById('selectorSonido');
const audio = document.getElementById('sonidoAlarma');
const source = audio.querySelector('source');

selectorSonido.addEventListener('change', () => {
    const nuevoSonido = selectorSonido.value;
    source.src = nuevoSonido;
    audio.load(); // Carga el nuevo sonido, el usuario da play si quiere escucharlo
});


function establecerAlarma(){
    let horaEstablecida = inputhoras.value;
    let minutosEstablecidos = String(inputminutos.value);
    let horaFijada = String(horaEstablecida + ":"+  minutosEstablecidos);
    let divSonido = document.getElementById('zona_sonido');
    let textoAlarma = document.getElementById('textProgramado');

    divSonido.style.display = "none";
    setInterval(function(){
        let tiempo = new Date();
        let horas = tiempo.getHours();
        let textHoras = String(horas).padStart(2, "0");
        let minutos = tiempo.getMinutes();
        let textMinutos = String(minutos).padStart(2, "0");
        let horaAlarma = String(textHoras + ":" + textMinutos);
        btnEstablecerAlarma.style.display = "none";
        /*if(horaFijada <= horaAlarma){
            alert("Hora no valida, la alarma no puede ser menor a la hora actual.");
            inputhoras.value = "00";
        }*/
       /*
        textoAlarma.textContent = "Alarma programada para " + horaFijada;
        
        if(horaFijada === horaAlarma){
            sonidoAlarma.play();
            btnDetener.style.display = "block";
            textoAlarma.textContent = "";
        }else{
            console.log("¡ALARMA NO SONANDO!");
        }

    }, 1000);

}

function ejecutarAlarma(){
    setInterval(establecerAlarma, 1000);
}

btnEstablecerAlarma.addEventListener('click', ejecutarAlarma);

function detenerAlarma(){
    location.reload();
}
*/

let iconMenu = document.getElementById("iconoMenu");
let iconoCerrar = document.getElementById("iconoCerrar");

let cabeceraList = document.getElementById("cabecera_list");
//let cabeceraListElement = document.getElementById("cabecera_list_element");


function mostrarMenu(){
    cabeceraList.style.display = "flex";
    iconMenu.style.display ="none";
    iconoCerrar.style.display = "block";
}

iconMenu.addEventListener("click", mostrarMenu);

function cerrarMenu(){
    cabeceraList.style.display = "none";
    iconMenu.style.display ="block";
    iconoCerrar.style.display = "none";
}

iconoCerrar.addEventListener("click", cerrarMenu);


//Página alarma
let inputhoras = document.getElementById('horas');
let inputminutos = document.getElementById('minutos');
let btnEstablecerAlarma = document.getElementById('btnEstablecer');
let btnDetener = document.getElementById('btnDetener');
let sonidoAlarma = document.getElementById('sonidoAlarma');

//Prueba de sonido
const selectorSonido = document.getElementById('selectorSonido');
const audio = document.getElementById('sonidoAlarma');
const source = audio.querySelector('source');

selectorSonido.addEventListener('change', () => {
    const nuevoSonido = selectorSonido.value;
    source.src = nuevoSonido;
    audio.load(); // Carga el nuevo sonido
});

let alarmaActiva = null; // guardamos el intervalo
let horaFijada = null;   // guardamos la hora programada

function establecerAlarma(){
    let horaEstablecida = parseInt(inputhoras.value);
    let minutosEstablecidos = parseInt(inputminutos.value);
    horaFijada = { horas: horaEstablecida, minutos: minutosEstablecidos };

    let textoAlarma = document.getElementById('textProgramado');
    textoAlarma.textContent = "Alarma programada para " + 
        String(horaEstablecida).padStart(2,"0") + ":" + 
        String(minutosEstablecidos).padStart(2,"0");

    btnEstablecerAlarma.style.display = "none";
    //btnDetener.style.display = "block";

    // Iniciamos el temporizador
    alarmaActiva = setInterval(verificarAlarma, 1000);
}

function verificarAlarma(){
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    if(horaFijada && horas === horaFijada.horas && minutos === horaFijada.minutos){
        sonidoAlarma.play();
        btnDetener.style.display = "block";
        document.getElementById('textProgramado').textContent = "";
        clearInterval(alarmaActiva); // detenemos la verificación
    }
}

btnEstablecerAlarma.addEventListener('click', establecerAlarma);

function detenerAlarma(){
    if(alarmaActiva){
        clearInterval(alarmaActiva);
    }
    sonidoAlarma.pause();
    sonidoAlarma.currentTime = 0; // reiniciar el audio
    location.reload(); // recargar página para reiniciar todo
}
