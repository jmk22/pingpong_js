var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#addition-form').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());

    var simpleCalculator = new Calculator();
    var output = simpleCalculator.addition(number1, number2);
    $('#addition-solution').text(output);
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

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
