const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");


searchButton.addEventListener("click", () => {
    const cityName = searchInput.value;
    getWeather(cityName);
});

async function getWeather(cityName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=879978fb90db15b9f328f911d9427dc0&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const country = data.sys.country;

            weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p>
                                     <p>Description: ${description}</p>
                                     <p>Country: ${country}</p>`;
        } else {
            weatherInfo.innerHTML = "<p>City not found</p>";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherInfo.innerHTML = "<p>Something went wrong</p>";
    }
}
