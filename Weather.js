const apiKey = "fb844f6fa2ee9e5aea1c167f5e5198e2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const wathericon = document.querySelector(".weather-icon");



async function cheakWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    document.querySelector("status").innerHTML=data.weather.main;

    if (data.weather[0].main == "Clouds") {
        wathericon.src = "images/clouds.png";

    } else if (data.weather[0].main == "Clear") {
        wathericon.src = "images/d58eb146152113.584973d61bdcf.gif";
    }
    else if (data.weather[0].main == "Rain") {
        wathericon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        wathericon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        wathericon.src = "images/mist.png";
    }
}

searchbtn.addEventListener("click", () => {
    cheakWeather(search.value);
})

 