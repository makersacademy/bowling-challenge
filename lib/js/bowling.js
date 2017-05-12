// $( document ).ready(function() {
//   var thermostat = new Thermostat();
//   updateTemperature();
//   displayWeather('London');
//
//
//   $('#current-city').change(function() {
//     event.preventDefault();
//     var city = $('#current-city').val();
//     displayWeather(city);
//   });
//
//   function displayWeather(city) {
//     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
//
// // ADD YOUR OWN API KEY!!!!!!
//     var token = '&appid=';
//     var units = '&units=metric';
//     $.get(url + token + units, function(data) {
//       $('#current-temperature').text(data.main.temp);
//     });
//   }
//
//
//   $( "#temperature-up" ).click(function( event ) {
//     thermostat.up();
//     updateTemperature();
//   });
//
//   $( "#temperature-down" ).click(function( event ) {
//     thermostat.down();
//     updateTemperature();
//   });
//
//   $( "#temperature-reset" ).click(function( event ) {
//     thermostat.resetTemperature();
//     updateTemperature();
//   });
//
//   $( '#powersaving-on' ).hide();
//
//   $( "#powersaving-off" ).click(function( event ) {
//     $( this ).hide();
//     thermostat.switchPowerSavingModeOff();
//     $('#power-saving-status').text('OFF');
//     updateTemperature();
//     $( "#powersaving-on" ).show( );
//   });
//
//   $( "#powersaving-on" ).click(function( event ) {
//     $( this ).hide();
//     thermostat.switchPowerSavingModeOn();
//     $('#power-saving-status').text('ON');
//     updateTemperature();
//     $( "#powersaving-off" ).show( );
//   });
//
//
//   function updateTemperature() {
//     $('#temperature').text(thermostat._temperature);
//     $('#temperature').attr('class', thermostat.energyUsage());
//   }
//
//
// });
