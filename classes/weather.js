class Weather{
    constructor(city){
        this.city = city;
        this.key = '9570903009c5f9042b0f4ac81b142ad2';
    } 

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = (await response).json();
        return responceData;
    } 

    changeCity(city){
        this.city = city;
    } 
} 