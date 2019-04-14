$(document).ready(function() {
  var scorecard = new Scorecard;
  scorecard.startGame();

  $('#submit-roll').submit(function(event) {
    event.preventDefault();
    var pins = parseInt($('#pins-knocked-down').val(), 10);
    scorecard.roll(pins);
    displayRolls();
    displayScore();
    displayBonus();

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
  function displayBonus() {
    scorecard.frames.forEach(function(frame) {
      var spareMessage = "Spare! The next roll will be added to this frame's score"
      var strikeMessage = "Strike! The next two rolls will be added to this frame's score"
      if(frame.index === 9) {
        spareMessage = 'Spare! You get a bonus roll!'
        strikeMessage = 'Strike! You get 2 bonus rolls!'
      };
      if(frame.rolls()[0] === 10) {
        $(`#bonus-${frame.index + 1}-2`).text(strikeMessage)
      } else if(typeof(frame.rolls()[1]) === 'number' && frame.rolls()[0] + frame.rolls()[1] > 9) {
        $(`#bonus-${frame.index + 1}-2`).text(spareMessage)
      } else {
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
