var apiKey = require('./../.env').apiKey;

function Weather(){
}

Weather.prototype.getWeather = function(city, displayFunction, x123, u, p) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    x123(u,p);
    displayFunction(city, response.main.humidity);
  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
