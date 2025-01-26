function searchCity (city){
    let apiKey = "ad031o47ac65t5df81db4b9e365cb480";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl). then (updateWeather);

}

let tempElement = document.querySelector("#weather-temp");
let temperature = Response.data.temperature.current;
let cityElement = document.querySelector("#weather-city");

cityElement.innerHTML = Response.data.city;
tempElement.innerHTML = Math.round(temperature);


function submitForm (event){
event.preventDefault();
let searchinput=document.querySelector("#search-input");

searchCity(searchinput.valu);
}

let searchForm = document.querySelector ("#Search-form");
searchForm.addEventListener("submit", submitForm);