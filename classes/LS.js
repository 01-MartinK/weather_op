class LS{
    constructor(city){
        this.city;
        this.defaultCity = 'Tallinn';
    } 

    saveCity(){
        localStorage.setItem('city', this.city);
    } 

    loadCity(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else{
            this.city = localStorage.getItem('city');
        } 
        return this.city;
    } 

    changeCity(city){
        this.city = city;
    } 
} 