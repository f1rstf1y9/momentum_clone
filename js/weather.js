const climate = document.querySelector("#climate > b");
const temperature = document.querySelector("#temperature > b");
const city = document.querySelector("#location > b");
const API_KEY = "17ffd6de1d30f912dfac571ed7822b9a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      climate.innerText = data.weather[0].main
      temperature.innerText = `${data.main.temp}°C`
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);