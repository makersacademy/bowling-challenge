$(document).ready(function() {
  var bowlingcard = new BowlingCard();

//   $('#select-city').submit(function(event) {
//   event.preventDefault();
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//     $('#current-temperature').text(data.main.temp);
//   })
// });
//
//   $('#temp-up').click(function() {
//     thermostat.up();
//     updateTemperature();

$('#f1b1').submit(function() {
  $('#score1').text("loooool");
});

$('#f1b2').submit(function() {
  var scoref1b2 = $('#f1b2score').val();
  bowlingcard.secondBowl(scoref1b1);
  $('#score1').text("score?");
});



});
