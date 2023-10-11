let input = document.querySelector('input');
let boton = document.querySelector('button');
let temp = document.querySelector('#temperatura')

function cargarCiudad() {
    let ciudad = input.value;
    if (ciudad == '') {
                // alert('Ingresa una ciudad');
    } else {
        $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es', function (dataClima) {
            temp.innerHTML = Math.round(dataClima.main.temp) + '<sup>°C</sup>';
            document.querySelector('#wicon').setAttribute('src', `https://openweathermap.org/img/wn/${dataClima.weather[0].icon}.png`);
            document.querySelector('#descripcion').textContent = dataClima.weather[0].description;
            document.querySelector('#ciudad').textContent = ciudad;    
            document.querySelector('.container').style.visibility = 'visible';
        }).fail(function(){
            alert("Escriba una ciudad que exista")        
        })
}
}
boton.addEventListener('click', cargarCiudad);