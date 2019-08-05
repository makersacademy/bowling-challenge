$( document ).ready(function() {

  var bowl = new BowlingAlley();

  // displayTemperature()
  // updateTemperature();
  // updatePowerSavingMode();
  // displayWeather('London')

  // $('#frame' + bowl.round+1).text(bowl.getTemperature());
  // $('#power-save').text(thermostat.powerSaveModeStatus());

  // $('#increase-temp').click(function() {
  //   thermostat.increaseTemperature();
  //   updateTemperature();
  //   $.post('http://localhost:9292/temperature/post-temp',thermostat.getTemperature(), function(data, status){
  //     alert("Data: " + data + "\nStatus: " + status);
  //   });
  // });
  //
  // $('#decrease-temp').click(function() {
  //   thermostat.decreaseTemperature();
  //   updateTemperature();
  // });
  //
  // $('#reset-temp').click(function() {
  //   thermostat.resetTemperature();
  //   updateTemperature();
  // });
  //
  // $('#toggle-psm').click(function() {
  //   thermostat.powerSaveToggle();
  //   updatePowerSavingMode();
  // });
  //
  // $('#select-city').submit(function(event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   displayWeather(city)
  // })
  //
  // function updateTemperature() {
  //   $('#get-temp').text(thermostat.getTemperature());
  //   $('#get-temp').attr('class', thermostat.getUsage());
  // }
  //
  // function updatePowerSavingMode() {
  //   $('#power-save').text(thermostat.powerSaveModeStatus());
  // }
  //
  // function displayWeather(city) {
  //   $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a3d9eb01d4de82b9b8d0849ef604dbed`, function(data) {
  //     $('#current-temp').text(data.main.temp);
  //   })
  // }
  //
  // function displayTemperature() {
  //   $.get('http://localhost:9292/temperature/get-temp', function(temp) {
  //     $('#get-temp').text(temp);
  //   })
  // }

});
