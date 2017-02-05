
$(document).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })
  $('#PSM').text(thermostat.getPSM());
  updateTemperature();
});

$('#up').on("click", function () {
  thermostat.up();
  updateTemperature();
  // $('#usage').text(thermostat.getCurrentUsage())
});

$('#down').on("click", function () {
  thermostat.down()
  updateTemperature();
  // $('#usage').text(thermostat.getCurrentUsage())
});

$('#power-saving').on("click", function () {
  thermostat.powerSavingModeSwitcher()
  $('#PSM').text(thermostat.getPSM())
});

$('#reset').on("click", function () {
  thermostat.reset()
  updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.getTemperature());
  $('#usage').text(thermostat.getCurrentUsage())
  $('#usage').attr('class', thermostat.getCurrentUsage());
}
// $.ajax({
//   url: "http://api.openweathermap.org/data/2.5/weather?q=London&mode=html&appid=b1b15e88fa797225412429c1c50c122a1",
//
// })
// http://api.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1
// http://api.openweathermap.org/data/2.5/weather?q=London&mode=html&appid=b1b15e88fa797225412429c1c50c122a1
