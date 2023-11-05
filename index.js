const rootElement = document.documentElement;

const clock = document.querySelector(".clock");
const dateInfo = document.querySelector(".date-info");
const time = document.querySelector(".time");

let r = 255;
let g = 0;
let b = 0;

const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

function mostrarDataDate(){
    const date = new Date()
    dateInfo.textContent = `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`;
}

setInterval(() => {
    const horaActual = new Date();
    time.textContent = horaActual.toLocaleTimeString();
}, 100);


function cambiarColores(r,g,b) {
    rootElement.style.setProperty('--color',`rgb(${r},${g},${b})`);
}

setInterval(() => {
    if(r == 255 && g == 0 && b < 255){
        b++;
        cambiarColores(r,g,b);
    }else if(r > 0 && g == 0 && b == 255){
        r--;
        cambiarColores(r,g,b);
    }else if(r == 0 && g < 255 && b == 255){
        g++;
        cambiarColores(r,g,b);
    }else if(r == 0 && g == 255 && b > 0){
        b--;
        cambiarColores(r,g,b);
    }else if(r < 255 && g == 255 && b == 0){
        r++;
        cambiarColores(r,g,b);
    }else if(r == 255 && g > 0 && b == 0){
        g--;
        cambiarColores(r,g,b);
    }

}, 1);

mostrarDataDate();