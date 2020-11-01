// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log(`server running on localhost: ${port}`);
    console.log(`http://localhost:${port}/`);
}

const wData = [];

// GET Route
app.get('/all', getData)

function getData(req, res) {
    res.send(projectData)
    console.log('get projectData', projectData)
}

// POST Route
app.post('/weatherData', weatherData);

function weatherData(req, res) {
    console.log('post req.body', req.body)
    newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        content: req.body.content
    }

    wData.push(newEntry)
    res.send(projectData)
    console.log('post projectData', projectData)
}