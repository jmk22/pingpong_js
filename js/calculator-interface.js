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
