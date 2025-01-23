function submitForm (event){
event.preventDefault();
let searchinput=document.querySelector("#search-input");
let cityelement = document.querySelector("#weather-city");
cityelement.innerHTML = searchinput.value;
}

let searchForm = document.querySelector ("#Search-form");
searchForm.addEventListener("submit", submitForm);