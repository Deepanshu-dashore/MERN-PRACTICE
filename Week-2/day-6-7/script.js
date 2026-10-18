const cityInput = document.getElementById("cityInput");
const errorMsg = document.getElementById("errorMsg");
const weatherInfo = document.getElementById("weatherInfo");
const cityNameDisplay = document.getElementById("cityNameDisplay");
const tempDisplay = document.getElementById("tempDisplay");
const windDisplay = document.getElementById("windDisplay");
const conditionDisplay = document.getElementById("conditionDisplay");

// Weather Code descriptions for Open-Meteo
const weatherCodes = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    51: "Light Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    71: "Slight Snow",
    80: "Rain Showers",
    95: "Thunderstorm"
};

async function searchWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        errorMsg.innerText = "Please enter a city name";
        weatherInfo.style.display = "none";
        return;
    }

    errorMsg.innerText = "";
    errorMsg.style.color = "#555";
    errorMsg.innerText = "Fetching weather...";
    weatherInfo.style.display = "none";

    try {
        // 1. Geocode city name to lat & lon
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            errorMsg.style.color = "red";
            errorMsg.innerText = `City "${city}" not found. Try another city.`;
            return;
        }

        const { name, country, latitude, longitude } = geoData.results[0];

        // 2. Fetch live forecast data
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        const { temperature, windspeed, weathercode } = weatherData.current_weather;

        // 3. Update DOM
        errorMsg.innerText = "";
        cityNameDisplay.innerText = `${name}, ${country || ""}`;
        tempDisplay.innerText = `${temperature}°C`;
        windDisplay.innerText = `Wind: ${windspeed} km/h`;
        conditionDisplay.innerText = `Condition: ${weatherCodes[weathercode] || "Partly Cloudy"}`;
        weatherInfo.style.display = "flex";
    } catch (err) {
        errorMsg.style.color = "red";
        errorMsg.innerText = "Error fetching weather data: " + err.message;
    }
}

// Allow Enter key to trigger search
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchWeather();
    }
});

// Load default city on startup
cityInput.value = "Khandwa";
searchWeather();
