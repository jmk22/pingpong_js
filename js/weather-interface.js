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
