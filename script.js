
// grab search button with query selector so you know when user submits. Attach event listener on form or button itself. or attach to button and listen for click 
// add cards in HTML 
// text content here with image tag to add icon and all weather data. setup a function to 
// function block of code that only runs when you want it to run. When the user clicks submit you are going to run function - fecth using user input to get lat and long of city. Once fetch, call another function that will run the other fecth that gives you the weather data using the lat and long. Once have all weather data, then you can do text content and images, etc. 
// only want to get data when the user submits in the form 
// inside array all  city names user searched store that into local storage so you have arrary to refer to when they come back to the site. Function - read ou the arry for local storage - go into local storage and get the array. Loop over that array and create buttons inside that loop for each city in the array. 


// api.openweathermap.org/data/2.5/forecast?q=
// ^API for geo location

// api.openweathermap.org/data/2.5/forecast?lat={}&lon={}&appid;
// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid;

function 

var apiKey = "e2ef6e62e6386ba2adf24ef3abacd567";
var city;

// get api's stored in a variable 5 day weather forecast and geo location - takes in the city name and works with the 2nd api to pull the data for that city - geo coding api 
// create a function ^ first, then you can use that in the fetch. Then where am I fetching, what API am I fetching. Figure out URL for API and what it means. 
// geocode url
function coordinates (cityName) {
    var geocodeLocation = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + apiKey;

    fetch(geocodeLocation)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            getWeather(data[0].lat, data[o].lon);
        })
        .catch(function (err){
            console.log(err);
        });
}; 

function getWeather (lat, lon) {
fiveDayApi = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';
todayApi = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';

    fetch(fiveDayApi)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            displayFiveDay(data);
        })
        .catch(function (err){
            console.log(err);
        });

    fetch(todayApi)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            displayToday(data);
        })
        .catch(function(err){
            console.log(err);
        });
};

var timeStamp = function () {

    for (var i=0; i < localStorage.length; i++){
        var key = localStorage.key(i);
    }
}