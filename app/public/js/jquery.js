$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $("#temperature-up").click(function() {
    thermostat.increase(1); //update model
    updateTemperature(); //update view
  });

  $("#temperature-down").click(function() {
    thermostat.decrease(1); //update model
    updateTemperature(); //update view
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingOn();
    $('#powersaving').text('Power Saving On')
    updateTemperature(); //update view
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#powersaving').text('Power Saving Off')
    updateTemperature(); //update view
  });

  $("#reset").click(function() {
    thermostat.reset(); //update model
    updateTemperature(); //update view
  });

  $('#energy-display').click(function() {
    thermostat.energyUsage(); //update model
    updateUsage(); //update view
  });

  $('#current-city').change(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.degrees);
    // $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateUsage() {
    $('#temperature').text(thermostat.degrees);
    $('#energy-display').attr('class', thermostat.energyUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=1f8964bd5eb43e2d0df92ec8d112b4b8';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  };
});
