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


//Página inicio
let tiempoActual;
let fechaActual;

function mostrarHora(){
    tiempoActual = setInterval(crearHora, 1000);
}

function crearHora(){
    let elementoHora = document.getElementById('elementoHora');
    let myFecha = new Date();
    let misHoras = String(myFecha.getHours()).padStart(2, "0");
    let misMinutos = String(myFecha.getMinutes()).padStart(2, "0");
    let misSegundos = String(myFecha.getSeconds()).padStart(2, "0");

    let horaMostrada = misHoras + ":" + misMinutos + ":" + misSegundos;

    elementoHora.textContent = horaMostrada;
}

function mostrarFecha(){
    fechaActual = setInterval(crearFecha,1000);
}

function crearFecha(){
    let elementoFecha = document.getElementById('elementoFecha');
    let miFecha = new Date();
    let miDia = String(miFecha.getDate()).padStart(2, "0");
    let miMes = String(miFecha.getMonth() + 1).padStart(2, "0"); // Los meses comienzan en 0
    let miYear = miFecha.getFullYear();
    let fechaMostrada = miDia + "/" + miMes + "/" + miYear;
    elementoFecha.textContent = fechaMostrada;
}
