const apiKey = "87a4e3b57fd5877a435275e9fae66ccd";
const btnElem = document.querySelector(".btn-show");
const inputElem = document.querySelector(".city");
const dateElem = document.querySelector(".date");
const characteristicsContainer = document.querySelector(".characteristics");
const weatherContainer = document.querySelector(".weather");
const forecastContainer = document.querySelector(".forecast");

const date = new Date();
dateElem.innerHTML = date.toLocaleDateString();

btnElem.addEventListener("click", () => {
    if (!inputElem.value) {
        alert("Enter name of the city and then press the button again");
        return;
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputElem.value}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found");
            } else {
                showWeather(data);
                updateBtnHandler(document.querySelector(".btn-update"));
                hourlyForecastBtnHandler(document.querySelector(".btn-hourly"), data);
            }
            inputElem.value = "";
        })
    .catch(err => console.log("Error: " + err));
})

function showWeather(data) {
    const time = new Date().toLocaleTimeString().slice(0,-3);
    const temp = Math.round(data.main.temp - 273.15);
    const imgSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherContainer.style.display = "flex";

    weatherContainer.innerHTML = `
        <h1 class="city-name large">${data.name}</h1>
        <span>Status at ${time}</span>
        <h2 class="temp">${temp}°C</h2>
        <h2 class="description large">${data.weather[0].description}</h2>
        <img src=${imgSrc}>
        <div>
            <button class="btn-update btn">Update</button>
            <button class="btn-hourly btn">Hourly forecast</button>
        <div>
    `;
};

function updateBtnHandler(btn) {
    btn.addEventListener("click", () => {
        console.log("The second button was pressed!");
        const cityName = document.querySelector(".city-name").innerHTML;

        let xhr = new XMLHttpRequest();
        xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) {
                alert("Something was going wrong")
            } else {
                showWeather(xhr.response);
            }
          };
    });
};

// Форматирует координату, чтобы она содержала строго 2 цифры после запятой
calcCoord = function (coord) {
    if ((coord > 0 && coord > 9) || (coord < 0 && coord > -10)) {
        coord = coord.toString().slice(0, 5);
    } else if (coord > 0 && coord < 10) {
        coord = coord.toString().slice(0, 4);
    } else if (coord < 0 && coord <= -10) {
        coord = coord.toString().slice(0, 6);
    }

    if (coord.split(".")[1].length === 1) {
        coord = coord + "0";
    } else if (coord.split(".")[1].length === 0) {
        coord = coord + "00";
    }

    return coord;
};

function hourlyForecastBtnHandler(btn, data) {
    btn.addEventListener("click", () => {
        const lon = calcCoord(data.coord.lon);
        const lat = calcCoord(data.coord.lat);
        const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=${apiKey}`;

        fetchRequest(api);
    })
}

async function fetchRequest(api) {
    let response = await fetch(api);
    if (response.ok) {
        let json = await response.json();
        showForecast(json);
    } else {
        alert("Wrong city");
        console.log("Ошибка HTTP: " + response.status);
    }
}

function showForecast(data) {
    forecastContainer.style.display = "flex";
    characteristicsContainer.style.display = "none";
    document.querySelector(".btn-hourly").style.display = "none";

    for (let i = 1; i < 24; i++) {
        const time = dateFormat(data.hourly[i].dt);
        const temp = Math.round(data.hourly[i].temp - 273.15);;
        const imgSrc = `http://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png`;

        const forecastItem = document.createElement("div");
        const forecastItemContent = `
            <div class="forecast-item">
                <span>${time}</span>
                <span>${temp}°C</span>
                <img src="${imgSrc}">
            </div>
        `;
        forecastContainer.appendChild(forecastItem);
        forecastItem.innerHTML = forecastItemContent;
    }
}

function dateFormat(num) {
    const date = new Date(num * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    const formattedDate = hours + ':' + minutes.substring(-2);

    return formattedDate;
}
