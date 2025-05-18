let city = "Sydney";
let country = "Australia";
let apiKey = "0b0730393co7c0e96d521df6373adt84";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Sydney&key=0b0730393co7c0e96d521df6373adt84&units=metric";

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let country = response.data.country;
  let description = response.data.condition.description;
  temperatureElement.innerHTML =
    "The temperature in ${city}, ${country} is ${temperature}°C (${description})";
}
axios.get(apiUrl).then(displayTemperature);
