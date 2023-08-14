# ***Weather App***
***This is a small weather app that allows users to input a location and view weather information for the given location. The app is built using HTML5, CSS3, and ReactJS, and it utilizes a third-party weather API to retrieve weather data.***
<br><br>
***
## Table of Contents
- [Introduction](#introduction)
- [Functional Requirements](#functional-requirements)
- [Non-functional Requirements](#non-functional-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [API](#api)
- [Screenshots](#screenshots)

<br>

## Introduction
The Weather App provides users with a simple and intuitive way to check weather conditions for their desired location. Users can input a location in the provided form, and the app will retrieve and display temperature, humidity, and other weather information. The app also includes weather icons to visually represent the current weather conditions.

<br>

## Functional Requirements

- The app features a form where users can input their desired location.
- Weather data is retrieved from a third-party weather API based on the user's input.
- The app displays temperature, humidity, and other weather conditions specific to the user's chosen location.
- Weather icons are displayed to represent the current weather conditions.
- Error handling is implemented to manage incorrect user input or API unavailability.


<br>

## Non-functional Requirements

- The app adheres to the provided design, including UI/UX elements, icons, and illustrations.
- User-friendly error messages are shown in accordance with the app's UI/UX.
- The app is optimized for fast loading and performance.
- Accessibility standards are followed to ensure the app is usable by individuals with disabilities.
- Thorough testing has been conducted to identify and eliminate bugs.

<br>

## Installation

1. Clone the repository: `git clone https://github.com/thevueeguy/weather-app.git`
2. Navigate to the project directory: `cd weather-app`
3. Install dependencies: `npm install or yarn install`
4. Run the application: `npm run dev or yarn run dev`

<br>

## Usage
1. Obtain an API key from [weather API provider](https://www.weatherapi.com/).
2. Obtain an API key from [Location API provider](https://locationiq.com/).
3. In the project directory, create a `.env` file and add your API key: `VITE_WEATHER_API_KEY=your-weather-api-key`
4. In the .env file add API token: `VITE_LOCATION_IQ_TOKEN=your-location-api-token`
5. Start the app: `npm run dev or yarn run dev`
6. Open your browser and navigate to [`http://localhost:5173`](http://localhost:5173) to use the app.
7. Enter the location in input field and press enter or click on "Get Device Location" to get the weather information.

<br>

## Technology Stack
- HTML5
- CSS3
- JavaScript (ES6+)
- ReactJS
- Framer-motion
- React router v6

<br>

## API
The app uses a third-party [weather API](https://www.weatherapi.com/) to retrieve weather data and third party [location api](https://locationiq.com/) to retrieve location data. Also,  you can choose any API you are comfortable with, such as OpenWeatherMap, AccuWeather, or Weather Underground. The API key is required for accessing weather data and location data.

<br>

## Screenshots
![image](https://github.com/thevueeguy/weather-app/assets/78133036/7e8569a4-5a9e-4706-b951-7f4d34264ae3)
<br>
![image](https://github.com/thevueeguy/weather-app/assets/78133036/03fc3725-a219-4d27-9dd0-6aa43ed71777)
<br>
![image](https://github.com/thevueeguy/weather-app/assets/78133036/5f92e853-b85f-4a1f-bf47-310b1baed305)
<br>
![image](https://github.com/thevueeguy/weather-app/assets/78133036/2e063eea-1b0d-4d05-8a67-4608c60b028f)
<br>
![image](https://github.com/thevueeguy/weather-app/assets/78133036/5caad1b6-4363-4ed7-8055-fb833ac0ae29)



