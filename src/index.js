function searchCity (city){
    let apiKey = "ad031o47ac65t5df81db4b9e365cb480";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl). then (refreshWeather);

}


function submitForm (event){
event.preventDefault();
let searchinput=document.querySelector("#search-input");
let cityelement = document.querySelector("#weather-city");
cityelement.innerHTML = searchinput.value;
searchCity(searchinput.valu);
}

let searchForm = document.querySelector ("#Search-form");
searchForm.addEventListener("submit", submitForm);