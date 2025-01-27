function updateWeather (response){


let tempElement = document.querySelector("#weather-temp");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#weather-city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new date (response.data.time * 1000);

cityElement.innerHTML = response.data.city;
timeElement.innerHTML = formatDate(date);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
tempElement.innerHTML = Math.round(temperature);

}

function formatDate(date){

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day =days [date.gateDay()];
    return `${day} ${hours}:${minutes}`;

}
function searchCity (city){
    let apiKey = "ad031o47ac65t5df81db4b9e365cb480";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl). then (updateWeather);

}



function submitForm (event){
event.preventDefault();
let searchinput=document.querySelector("#search-input");

searchCity(searchinput.value);
}

let searchForm = document.querySelector ("#Search-form");
searchForm.addEventListener("submit", submitForm);

