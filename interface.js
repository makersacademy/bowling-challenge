$(document).ready(function() {
  var scorecard = new Scorecard;
  scorecard.startGame();

  $('#submit-roll').submit(function(event) {
    event.preventDefault();
    var pins = parseInt($('#pins-knocked-down').val(), 10);
    scorecard.roll(pins);
    displayRolls();

  });

  function displayRolls() {
    scorecard.frames.forEach(function(frame) {
      console.log(frame)
      if(frame.rolls()[0] === 10) {
        $(`#pins-${frame.index + 1}-1`).text("\\/")
        $(`#pins-${frame.index + 1}-2`).text("/\\")
      } else if(typeof(frame.rolls()[1]) === 'number') {
        $(`#pins-${frame.index + 1}-1`).text(frame.rolls()[0])
        var secondRoll = frame.rolls()[1] + frame.rolls()[0] === 10 ? '/' : frame.rolls()[1]
        $(`#pins-${frame.index + 1}-2`).text(secondRoll)
      } else if(typeof(frame.rolls()[0]) === 'number') {
        $(`#pins-${frame.index + 1}-1`).text(frame.rolls()[0])
      };
    });
  };
});
