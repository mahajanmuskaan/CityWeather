const APIkey = "6374582dd1ce4be98ff115803230505";
let inputField = document.getElementById("input_city").value;
if (inputField == '') {
    fetchApiData(APIkey, "Dhariwal")
}
const button = document.getElementById("button-addon2");
button.addEventListener("click", () => {
    inputField = document.getElementById("input_city").value;
    console.log(inputField);
    fetchApiData(APIkey, inputField);
});

async function fetchApiData(APIkey, location) {
    try {
        // Fetching response from Public API
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        console.log(response.status);   // Getting Response status
        console.log(response.ok);       // Getting boolean value of response.ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);     // if boolean value of response.ok is false, it will throw the error.
        }

        console.log("Data is going to parse.")
        const json_data = await response.json(); // Parse the JSON response
        console.log("Data is parsed.")
        const dataElement1 = document.getElementById('city_name');
        dataElement1.innerText = json_data["location"]["name"];
        dataElement1.style.color = "black";
        const dataElement2 = document.getElementById('condition_icon');
        dataElement2.setAttribute("src", json_data["current"]["condition"]["icon"]);
        const dataElement4 = document.getElementById('condition_text');
        dataElement4.innerText = json_data["current"]["condition"]["text"];
        dataElement4.style.color = "black";

        //Setting gradient Colors for all types of Weather Conditions
        const dataElementBackground = document.getElementsByClassName('city-section')[0];
        dataElementBackground.style.color = "black";
        if (dataElement4.innerText == 'Sunny') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #F8D030, #FFA000, #FF5733, #C70039)";
        }
        else if (dataElement4.innerText == 'Clear') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #ff8c00, #ffd700)";
        }
        else if (dataElement4.innerText == 'Partly cloudy') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #E0E0E0, #BDBDBD, #7F7F7F, #424242)";
        }
        else if (dataElement4.innerText == 'Overcast') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #D9D9D9, #BFBFBF, #A0A0A0, #808080)";
        }
        else if (dataElement4.innerText == 'Mist' || dataElement4.innerText == 'Cloudy') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #BFBFBF, #A0A0A0, #808080, #696969)";
        }
        else if (dataElement4.innerText == 'Patchy sleet possible' || dataElement4.innerText == 'Patchy light drizzle') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #B4C8FF, #7B95FF, #2B2E66)";
        }
        else if (dataElement4.innerText == 'Thundery outbreaks possible') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #FFD700, #FF8C00, #FF6347, #8B0000)";
        }
        else if (dataElement4.innerText == 'Blowing snow' || dataElement4.innerText == 'Blizzard') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #FFFFFF, #F2F2F2, #D9D9D9, #BFBFBF)";
        }
        else if (dataElement4.innerText == 'Fog') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #E6E6E6, #B3B3B3, #808080, #4D4D4D)";
        }
        else if (dataElement4.innerText == 'Light drizzle') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #C2C2C2, #AFAFAF, #999999)";
        }
        else if (dataElement4.innerText == 'Patchy snow possible' || dataElement4.innerText == 'Freezing drizzle') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #CCE1FF, #93B4FF, #4C5D9C)";
        }
        else if (dataElement4.innerText == 'Patchy freezing drizzle possible' || dataElement4.innerText == 'Freezing fog' || dataElement4.innerText == 'Heavy freezing drizzle') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #FFFFFF, #D9D9D9, #B3B3B3, #808080)";
        }
        else if (dataElement4.innerText == 'Patchy light rain' || dataElement4.innerText == 'Patchy rain possible') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #C9DEFF, #73A8FF, #3C64B1, #1E2A56)";
        }
        else if (dataElement4.innerText == 'Light rain' || dataElement4.innerText == 'Moderate rain at times' || dataElement4.innerText == 'Moderate rain') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #A7BFE8, #7087D1, #2E3E8C, #0D1C4D)";
        }
        else if (dataElement4.innerText == 'Heavy rain at times' || dataElement4.innerText == 'Heavy rain') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #303F9F, #1E266D)";
        }
        else if (dataElement4.innerText == 'Light freezing rain' || dataElement4.innerText == 'Moderate or heavy freezing rain' || dataElement4.innerText == 'Light sleet'
            || dataElement4.innerText == 'Moderate or heavy sleet' || dataElement4.innerText == 'Patchy light snow' || dataElement4.innerText == 'Light snow' ||
            dataElement4.innerText == 'Light snow' || dataElement4.innerText == 'Patchy moderate snow' || dataElement4.innerText == 'Moderate snow' ||
            dataElement4.innerText == 'Patchy heavy snow' || dataElement4.innerText == 'Heavy snow' || dataElement4.innerText == 'Ice pellets'
            || dataElement4.innerText == 'Light sleet showers' || dataElement4.innerText == 'Moderate or heavy sleet showers' || dataElement4.innerText == 'Light snow showers' ||
            dataElement4.innerText == 'Moderate or heavy snow showers' || dataElement4.innerText == 'Light showers of ice pellets' || dataElement4.innerText == 'Moderate or heavy showers of ice pellets' ||
            dataElement4.innerText == 'Patchy light snow with thunder' || dataElement4.innerText == 'Moderate or heavy snow with thunder') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #DCE4F5, #96B2D7, #2E3E8C)";
        }
        else if (dataElement4.innerText == 'Light rain shower' || dataElement4.innerText == 'Moderate or heavy rain shower' || dataElement4.innerText == 'Torrential rain shower' ||
            dataElement4.innerText == 'Patchy light rain with thunder' || dataElement4.innerText == 'Moderate or heavy rain with thunder') {
            dataElementBackground.style.background = "linear-gradient(to bottom, #A7BFE8, #7087D1, #2E3E8C)";
        }
        else {
            dataElementBackground.style.background = "white"
        }

        const dataElement5 = document.getElementById('celsius');
        dataElement5.innerText = json_data["current"]["temp_c"];
        const dataElement6 = document.getElementById('fahrenheit');
        dataElement6.innerText = json_data["current"]["temp_f"];
        const dataElement7 = document.getElementById('wind_speed');
        dataElement7.innerText = json_data["current"]["wind_kph"];
        const dataElement8 = document.getElementById('humidity');
        dataElement8.innerText = json_data["current"]["humidity"];
        const dataElement9 = document.getElementById('pressure');
        dataElement9.innerText = json_data["current"]["pressure_in"];
    }
    catch (error) {
        console.error("Error is there while fetching API. ", error); // Log any errors
    }
}
