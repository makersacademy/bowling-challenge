$(document).ready(function() {
  var bowlingGame = new BowlingGame();

  $('.button-a').on('click', function() {
    var currentValue = $(".button-a").text();
    var pin = parseInt(parseFloat(currentValue));
    bowlingGame.firstShot(pin);
  });

  $('.buttonb').on('click', function() {
    // $('.firstShot').text('1');
    bowlingGame.secondShot(2);
  });

});