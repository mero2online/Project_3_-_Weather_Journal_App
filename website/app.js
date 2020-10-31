/* Global Variables */

// Base URL for OpenWeatherMap API to optain current weather data by ZIP code
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
// Personal API Key for OpenWeatherMap API
let apiKey = '&appid=7e3d290cd442823876bb07faec6a3a8e';
let zip = document.getElementById('zip').value

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const userResponse = document.getElementById('content').value;
    
    getWebData(baseURL, zip, apiKey)

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
const getWebData = async (baseURL, zip, apiKey) => {
    const res = await fetch(baseURL + zip + apiKey);
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

/* Function to GET Project Data */