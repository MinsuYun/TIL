const LOCATION = "location";
const API_KEY = "63f93fa965a13044ae7c86f02ed4e0f1";
const weatherInfo = document.querySelector(".js-weather");



function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
.then(function(info){
    return info.json();
})
.then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weatherInfo.innerText = `${temperature} @${place}`
})
};






function saveLocation(coordsObj){
    localStorage.setItem(LOCATION, JSON.stringify(coordsObj));
}

function handleFoundLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    const coordsObj = {
        latitude,
        longitude
    };

    saveLocation(coordsObj);
    getWeather(latitude, longitude);
}

function handleErrorLocation(){
    console.log("Sorry, location is not founded!")
}


function askLocation() {
   navigator.geolocation.getCurrentPosition(handleFoundLocation , handleFoundLocation)
}


function loadLocation(){
    const locationNow = localStorage.getItem(LOCATION)
    if(locationNow === null) {
      askLocation();      
    } else {
      const parseLocationNow = JSON.parse(locationNow)
        getWeather(parseLocationNow.latitude, parseLocationNow.longitude);
    }
}



function init() {
    loadLocation();
}

init();
