
# City Weather


## Introduction
The website is a simple weather app that displays the weather information of a city when a user enters its name. The app uses the Weather API to retrieve the weather data and display it on the screen. 


### HTML File Section
The HTML code has three main sections, which are 
  1. Top section, 
  2. Search section, and 
  3. City section. 

#### Top Section
The top section displays a message to prompt the user to enter a city name to check the weather. 

#### Search Section
The search section contains an input field and a submit button to enter the city name. 

#### City Section
Finally, the city section displays the weather information of the entered city, including the city name, weather condition, temperature in Celsius and Fahrenheit, humidity, wind speed, and pressure. 

### CSS File Section
The CSS code has various styles for the body, top section, search section, and city section. It also defines the background image and position for the website.

### Javascript File Section

The JavaScript code handles the fetching of weather data from the Weather API and updates the city section with the retrieved data. It defines two constants: the Weather API URL and the API key. It also defines a fetchWeatherData() function that accepts the API key and city name as parameters and returns the weather data for the specified city. The function then updates the city section with the retrieved weather data. 

