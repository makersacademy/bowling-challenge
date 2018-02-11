$(document).ready(function() {
  var bowling = new Bowling();
  var prev_pin = 0;

  function pinGenerator(maxValue) {
    return Math.floor(Math.random() * maxValue);
  }

  function clearState() {
    bowling = new Bowling();
    prev_pin = 0;
    $("#pin").text("");
    $("#score").text("");
    $("#pin_history").text("");
    event.preventDefault();
  }

  $("#reset").click(clearState);

  $("#roll").click(function(event) {
    var pin = pinGenerator(10 - prev_pin);
    if (bowling.roll(pin) === false) {
      alert("Game over, start a new one");
      return;
    }
    if (bowling.frame.isDone()) {
      prev_pin = 0;
    } else {
      prev_pin = pin;
    }
    var score = bowling.gameScore();
    $("#pin").text(pin);
    $("#score").text(score);

    $("#pin_history").text(bowling.toString());
    event.preventDefault();
  });
});
