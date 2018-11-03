$(document).ready(function () {
  var game = new Game();
  var frame = new Frame();
  var roll = new Roll();
  var newRoll1;
  var newRoll2;

  updateScoreText();
  frameScoreText();


  $('button').one('click', function() {
    value = $(this).attr('value');
    newRoll1 = roll.getRoll(value);
    console.log(1);

    $('button').one('click', function() {
    value = $(this).attr('value');
    newRoll2 = roll.getRoll(value);
    console.log(2);

    frameScore();
    frameScoreText();
    console.log(3);

    console.log("Click one", newRoll1)
    console.log("Click two", newRoll2);
    console.log(frameScoreText());
  })
});

function frameScore() {
    frame.calculateScore(parseInt(newRoll1, newRoll2));
    frameScoreText();
  };

  function updateScoreText() {
    $('#current_score').text(game.getTotalScore());
  };

  function frameScoreText() {
    $('#frame_score').text(frame.getCurrentScore());
  };

  function updateScore() {
    currentScore = frame.getCurrentScore()
    game.updateTotalScore(currentScore)
  };
});
