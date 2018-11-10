// $(document).ready(function () {
//
//   // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=72e80e23fc9e40e2ece92a1e77019ac7&units=metric', function(data) {
//   // $('#current-temperature').text(data.main.temp);
//   // })
//   $('#city-input-form').submit(function (event) {
//     event.preventDefault();
//     var city = $('#city-input').val();
//     var unit = $('#unit').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=72e80e23fc9e40e2ece92a1e77019ac7&units=' + unit, function (data) {
//     $('#current-temperature').text(data.main.temp)
//   })
// })
// $('#unit').change(function () {
//   var city = $('#city').val();
//   var unit = $('#unit').val();
// $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=72e80e23fc9e40e2ece92a1e77019ac7&units=' + unit, function (data) {
//   $('#current-temperature').text(data.main.temp)
// })
// })
//
//   var thermostat = new Thermostat();
//   updateTemperature();
//   updatePowerSave();
//   updatePowerUsage();
//   updateColour();
//
//   $('#temperature-up').click(function() {
//     thermostat.increaseTemp();
//     updateTemperature();
//     updatePowerUsage();
//     updateColour();
//   })
//   $('#temperature-down').click(function() {
//     thermostat.decreaseTemp();
//     updateTemperature();
//     updatePowerUsage();
//     updateColour();
//   })
//   $('#temperature-reset').click(function() {
//     thermostat.reset();
//     updateTemperature();
//     updatePowerUsage();
//     updateColour();
//   })
//   $('#power-saving-on').click(function() {
//     thermostat.powerSaveOn();
//     updatePowerSave();
//   })
//   $('#power-saving-off').click(function() {
//     thermostat.powerSaveOff();
//     updatePowerSave();
//   })
//
//   function updateTemperature() {
//     $('#temperature').text(thermostat.temp())
//   }
//
//   function updatePowerSave() {
//     $('#power-saving-mode').text(thermostat.powerSave())
//   }
//
//   function updatePowerUsage() {
//     $('#power-usage').text(thermostat.energyUsage())
//   }
//
//   function updateColour() {
//     $('#temperature').attr('class', thermostat.energyUsage())
//   }
// });
