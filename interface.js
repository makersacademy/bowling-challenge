$(document).ready(function() {
  var scorecard = new Scorecard;
  scorecard.startGame();

  $('#submit-roll').submit(function(event) {
    event.preventDefault();
    var pins = parseInt($('#pins-knocked-down').val(), 10);
    scorecard.roll(pins);
    displayRolls();
    displayScore();

  });

  function displayRolls() {
    scorecard.frames.forEach(function(frame) {
      if(frame.index === 9) {
        $(`#pins-10-1`).text(frame.rolls()[0])
        $(`#pins-10-2`).text(frame.rolls()[1])
        $(`#pins-10-3`).text(frame.rolls()[2])
      } else if(frame.rolls()[0] === 10) {
        $(`#pins-${frame.index + 1}-2`).text(10)
      } else {
        $(`#pins-${frame.index + 1}-1`).text(frame.rolls()[0])
        $(`#pins-${frame.index + 1}-2`).text(frame.rolls()[1])
      };
    });
  };

  function displayScore() {
    for(i=0;i<9;i++) {
      $(`#score-${i + 1}-2`).text(scorecard.frameScores[i]);
    };
    $(`#score-10-3`).text(scorecard.frameScores[9]);
  };
});
