const apikey = "9ac8e2f4b7aabb049ab8ed9e3058be79";

const weatherDataEl = document.getElementById("weather-data"); 

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    console.log(cityValue);
    getWeatherData(cityValue); //function call
});

async function getWeatherData(cityValue){

    try{
        //declare a constant called response, "fetch" function is a built
        //in JS function used to make HTTP requests
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json(); //method call, stores the JSON data into the var "data"

        const temperature = Math.round(data.main.temp);

        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        //array
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind : ${data.wind.speed} m/s`,
        ]

        //displaying 
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent = "";
        weatherDataEl.querySelector(".details").innerHTML = details.map((detail)=>`<div>${detail}</div>`).join("");
   
    } catch(error){

        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent = "An error happened, please check your spelling or try again later";
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}





