const apiKey = "87a4e3b57fd5877a435275e9fae66ccd";
const btnElem = document.querySelector(".btn-show");
const inputElem = document.querySelector(".city");
const dateElem = document.querySelector(".date");
const weatherContainer = document.querySelector(".weather");

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
            console.log(data);
            inputElem.value = "";
            showWeather(data);
            updateBtnHandler(document.querySelector(".btn-update"));
        })
    .catch(err => console.log("Error: " + err));
})

function showWeather(data) {
    const time = new Date().toLocaleTimeString().slice(0,-3);
    const temp = Math.round(data.main.temp - 273.15);
    const imgSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherContainer.innerHTML = `
        <h1 class="city-name large">${data.name}</h1>
        <span>Status at ${time}</span>
        <h2 class="temp">${temp}°C</h2>
        <h2 class="description large">${data.weather[0].description}</h2>
        <img src=${imgSrc}>
        <button class="btn-update btn">Update</button>
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
            console.log(`Загружено: ${xhr.status}`);
            console.log(xhr.response);
            showWeather(xhr.response);
          };
    });
};
