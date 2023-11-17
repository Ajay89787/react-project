const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'YOUR_CITY_NAME'; // Replace with your city name
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

const weatherIcon = document.querySelector(".weather-icon img");
const temperatureElement = document.getElementById('');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = Math.round(data.main.temp);
        const icon = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

        weatherIcon.src = iconUrl;
        temperatureElement.textContent = temperature;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
    </script>

</body>
</html>