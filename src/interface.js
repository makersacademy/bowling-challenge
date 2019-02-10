'use strict'

let bowling = new Bowling()

$(document).ready(function () {
  updateGameScore()
  updateFrameNumber()
  populateTable()
})

function updateGameScore () {
  $('#game-total').text(bowling.gameScore())
}

function updateFrameNumber () {
  $('#frame-number').text(bowling.frame + 1)
}

function populateTable () {
  let frames = bowling.
  // ($('#1').find('#frame')).text('')
}

// 'use strict';
// let thermostat = new Thermostat();
//
// $(document).ready(function() {
//   updateTemperature();
//
//   $('#up').on('click', function() {
//     thermostat.up();
//     updateTemperature();
//   });
//
//   $('#down').on('click', function() {
//     thermostat.down();
//     updateTemperature();
//   });
//
//   $('#reset').on('click', function() {
//     thermostat.reset();
//     updateTemperature();
//   });
//
//   $('#powersaving-on').on('click', function() {
//     thermostat.powerSavingOn();
//     updatePowerSaving();
//     updateTemperature()
//   });
//
//   $('#powersaving-off').on('click', function() {
//     thermostat.powerSavingOff();
//     updatePowerSaving();
//   });
//
//   $('#select-city').submit(function(event) {
//     event.preventDefault();
//     let city = $('#current-city').val();
//     displayWeather(city)
//   });
// });
//
// function updateTemperature() {
//   $('#temperature').text(thermostat.temperature());
//   $('#temperature').attr('class', thermostat.usage());
// }
//
// function updatePowerSaving() {
//   $('#power-saving-status').text(powerSavingStatus())
// }
//
// function powerSavingStatus() {
//   if(thermostat._isPowerSaving) {
//     return 'on'
//   } else {
//     return 'off'
//   }
// }
//
// function displayWeather(city) {
//   $.getJSON('http://api.openweathermap.org/data/2.5/weather', {
//     q: city,
//     units: 'metric',
//     APPID: '9ffd6ea68429e495554bbb505107a4d9'
//   }, function (data) {
//     console.log('I am called!');
//     $('#current-temperature').text(data.main.temp);
//   });
// }
