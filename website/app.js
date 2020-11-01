/* Global Variables */

// Base URL for OpenWeatherMap API to optain current weather data by ZIP code
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
// Personal API Key for OpenWeatherMap API
let apiKey = '&appid=7e3d290cd442823876bb07faec6a3a8e';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const userResponse = document.getElementById('content').value;
    const zipCode = document.getElementById('zip').value;

    getWebData(baseURL, zipCode, apiKey)

        .then(function (data) {
            console.log('getWebData', data)
            postData('/weatherData', {
                temperature: data.main.temp,
                date: newDate,
                userResponse: userResponse
            })
            updateUI()
        });
};

/* Function to GET Web API Data*/
const getWebData = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL + zipCode + apiKey);
    try {
        const data = await res.json();
        console.log('getWebData', data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    console.log('postData', data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}
/* Function to GET Project Data */