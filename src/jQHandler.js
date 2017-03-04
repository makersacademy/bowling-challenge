$(document).ready(function() {

  var thermostat = new Thermostat();
  updateFigure();

  $('#down').click(function() {
    thermostat.down();
    updateFigure();
  })

  $('#up').click(function() {
    thermostat.up();
    updateFigure();
  })

  $('#PSM').click(function() {
    if (thermostat.isPowerSavingOn) {
      thermostat.powerSavingOff();
      $('#PSM-status').text('PSM OFF');
      $('#PSM-status').attr('class', 'bg-info');
      // updateFigure();
    } else {
      thermostat.powerSavingOn();
      $('#PSM-status').text('PSM ON');
      $('#PSM-status').attr('class', 'bg-primary');
      // updateFigure();
    }
  })

  $('#RESET').click(function() {
    thermostat.reset();
    updateFigure();
    $('#PSM-status').text('PSM ON');
    $('#PSM-status').attr('class', 'bg-primary');
  });

  function updateFigure() {
    $('#temperature-figure').text(thermostat.temperature + ' °C');
    $('#temperature-figure').attr('class', 'bg-success');
    $('#usage').text(thermostat.energyUsage());
    $('#usage').attr('class', thermostat.energyUsage());
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7589b043f6cafecb24d1f8ad71811387&units=metric', function(data) {
    $('#outside-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7589b043f6cafecb24d1f8ad71811387&units=metric', function(data) {
      $('#outside-temperature').text(data.main.temp)
    })
  })
})
