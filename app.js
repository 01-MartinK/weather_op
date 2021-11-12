const weatherSubmitButton = document.querySelector('#weatherSubmit');
const weatherChangeText = document.querySelector('#weatherText')



weatherSubmitButton.addEventListener('click', changeCity)

const ui = new UI();
const ls = new LS();
const cityName = ls.loadCity();

console.log(cityName);
// Weather object
const weather = new Weather(cityName);

// get city weather and display it

function getCityWeather(){
    weather.getWeather()
    .then(data =>{
        ui.drawWeather(data);
        console.log(data);
    } )
    .catch(error => console.log(error))
} 

getCityWeather()

function changeCity(e){
    const newCity = weatherChangeText.value
    weather.changeCity(newCity);
    ls.changeCity(newCity);
    ls.saveCity();
    console.log(weather)
    getCityWeather();
    e.preventDefault();
} 