class UI{
  
 drawWeather( data ) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;
  
    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celcius + '&deg;';
    document.querySelector('#location').innerHTML = data.name;
    document.querySelector('.wind_speed').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.wind_angle').innerHTML = data.wind.deg + '&deg';
    document.querySelector('#pressure').innerHTML = data.main.pressure;
    document.querySelector('.humititi').innerHTML = data.main.humidity+'%';
    document.querySelector('#UV').innerHTML = "";
  }
} 