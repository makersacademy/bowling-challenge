var Bowling = require('../lib/bowling')

$(document).ready(function() {
  var bowling = new Bowling();
  $('#frameCount').text(bowling.getFrame());
  $('#play').text(bowling.getPlay());
  $('#scorecard').text(bowling.getFrame());


  $('#roll').click(function(){
    bowling.roll();
    updateScorecard();
  });

  function updateScorecard() {
    $('#frameCount').text(bowling.getFrame());
    $('#play').text(bowling.getPlay());
    $('#scorecard').text(bowling.getFrame());
  };

});

//   $(document).ready(function(){
//     $.get("http://api.openweathermap.org/data/2.5/weather?id=2643741&appid=b0574c261cbba515f58e50a9acc6d19b", function(weatherResponse){
//       city = weatherResponse.name;
//       forecast = weatherResponse.weather[0].main;
//       $('#weather').text(`The current weather forecast for ${city} is ${forecast}`);
//     })
//   });
//
//
//
//   $('#down').click(function(){
//     thermostat.down();
//     updateTemperature();
//   });
//
//   $('#resetTemperature').click(function(){
//     thermostat.resetTemperature();
//     updateTemperature();
//   });
//
//   $('#setSavingModeOn').click(function(){
//     thermostat.setSavingModeOn();
//     updateTemperature();
//   });
//
//   $('#setSavingModeOff').click(function(){
//     thermostat.setSavingModeOff();
//     updateTemperature();
//   });
