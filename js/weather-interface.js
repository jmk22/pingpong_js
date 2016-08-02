var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData){
  $('.showWeather').text('The humidity in ' + city + " is " + humidityData + '%');
}

var interfaceFunction = function(a, b){
  $('.texttest').text(a+b);
}

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    var f = $('#q').val();
    var w = $('#t').val();

    $('#location').val('');
    currentWeatherObject.getWeather(city, displayHumidity, interfaceFunction, f, w);
  });
});
