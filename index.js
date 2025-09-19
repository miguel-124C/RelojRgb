const rootElement = document.documentElement;

const clock = document.querySelector(".clock");
const dateInfo = document.querySelector(".date-info");
const time = document.querySelector(".time");

const currentDate = new Date();

let isFullScreen = false;

let r = 255;
let g = 0;
let b = 0;

const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

function mostrarDataDate(){
    dateInfo.innerHTML += `${days[currentDate.getDay()]} ${currentDate.getDate()} de ${months[currentDate.getMonth()]} del ${currentDate.getFullYear()}`;
    time.textContent = getTimeFormat( currentDate );
}

setInterval(() => {
    time.textContent = getTimeFormat(new Date());
}, 1000);

getTimeFormat = ( date ) => {
    return date.toLocaleTimeString('es', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    });
}

function cambiarColores(r,g,b) {
    rootElement.style.setProperty('--color',`rgb(${r},${g},${b})`);
}

const changeColors = setInterval(() => {
    if (getColorFijo()) {
        stopChangeColors();
        rootElement.style.setProperty('--color', getColorFijo());
        return;
    }

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

const stopChangeColors = ()=> clearInterval(changeColors);

function setColorFijo() {
    stopChangeColors();
    const inputColor = document.createElement("input");
    inputColor.type = "color";
    inputColor.click();

    inputColor.addEventListener("input", (e)=> {
        const color = e.target.value;
        saveColorFijo(color);
        rootElement.style.setProperty('--color',color);
    });
}

function resetColorsDefault() {
    localStorage.removeItem("color-fijo");
    location.reload();
}

const getColorFijo = ()=> localStorage.getItem("color-fijo");
const saveColorFijo = (color)=> localStorage.setItem("color-fijo", color);

document.addEventListener("dblclick", ()=> {
    (isFullScreen)
        ? document.exitFullscreen()
        : document.body.requestFullscreen();

    isFullScreen = !isFullScreen;
});

mostrarDataDate();