$(document).ready(function (){
  var game = new Game();

  $( '#bowlingBall' ).click(function() {
    console.log(game);
    var rollScore =  parseInt(document.getElementById('rollScore').value);
    rollCheck(game, rollScore);

    game.rollBall(rollScore);

    {$('.roll_scored').text('You rolled a: ' + rollScore);}

    if (game.isStrike(rollScore)) {
      $(".strike").show();
      setTimeout(function() { $(".strike").hide(); }, 2000);
      $(".strike2").show();
      setTimeout(function() { $(".strike2").hide(); }, 5000);
    }

    printScores(game);
  });
});

var printScores = function(game) {
  for( var frameIndex = 0, len = game.allFrames.length; frameIndex < len; frameIndex++) {
    var currentFrame = game.allFrames[frameIndex];
    for( var rollNumber = 1, rollLen = (currentFrame.length + 1); rollNumber < rollLen; rollNumber++) {
      {$('#frame' + (frameIndex + 1) +'_roll'+ rollNumber).text(game.allFrames[frameIndex][rollNumber - 1]);}
    }
    {$('#marker' + (frameIndex)).text(game.scoreCalculator.frameScores[frameIndex]);}
  }
  {$('#totalScore').text(game.scoreCalculator.totalScore);}
};

var rollCheck = function(game, rollScore) {
  if (game.gameOver) alert('Game is over!');
  else if (game._isNotLegalInput(rollScore)) alert('Roll value is not legal, input a value from 0 to 10');
  else if (game._isSecondRollOfFrame() && !game._isTenthFrame()) {
    var currentFrame = (game.allFrames[game._currentFrameNumber()]);
    var firstRollCurrentFrame = game.scoreCalculator.firstRollScore(currentFrame);
    if ((firstRollCurrentFrame + rollScore) > 10) alert('Roll count over the two roles in this frame is too high, input a legal value');
  }
};
