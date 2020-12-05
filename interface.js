$(document).ready(function() {
  var game = new BowlingGame();

  function recordRoll(pins) {
    // somehow I need to pass the pins to the model!!
  }

  $('#pins_hit').change(function(event) {
    var pins = event.target.value;
    recordRoll(pins);
  });
});
