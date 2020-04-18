$(document).ready(function() {
$('#enter-name').submit(function(event) {
  event.preventDefault();
  var playerName = $('#city ').val()
  getWeather(currentCity);
});
});