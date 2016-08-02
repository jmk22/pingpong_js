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

var apiKey = "689f4703920cf78f077aa4205b153424";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response){
      console.log(JSON.stringify(response));
      console.log("The humidity in " + city + " is " + response.main.humidity + "%");
    });
    console.log("Notice: the GET request has been made.");
  });
});
