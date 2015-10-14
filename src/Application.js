updater = new BowlingScoreUpdater();

var htmlRoundNumber = 1;

var htmlWriter = function(score){

  if ((updater.game.frameRoundsLeft === 1 && updater.game.currentFrameTotal + score > 10) || htmlRoundNumber > 21) {
    return;
  };

  if ((score === 10 && updater.game.frameRoundsLeft === 0) || (score === 10 && updater.game.currentFrameNumber === 1 && updater.game.frameRoundsLeft === 2)) {
    if (htmlRoundNumber < 19) {htmlRoundNumber += 1};
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = 'X';
  } else if (updater.game.currentFrameTotal + score === 10 && updater.game.frameRoundsLeft === 1) {
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = '/';
  } else {
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = score;
  };
  htmlRoundNumber += 1;

  updater.newRound(score);

  var currentFrameNumber = updater.game.currentFrameNumber;
  var prevFrameNumber = updater.game.currentFrameNumber - 1;
  var prevPrevFrameNumber = updater.game.currentFrameNumber - 2;

  if (currentFrameNumber >= 1 && currentFrameNumber <= 10){
    document.getElementById('f'+ currentFrameNumber.toString()).innerHTML
      = updater.game.currentFrameTotal;
  };

  if (prevFrameNumber >= 1 && prevFrameNumber <= 10){
    document.getElementById('f'+ prevFrameNumber.toString()).innerHTML
      = updater.game.prevFrameTotal;
  };

  if (prevPrevFrameNumber >= 1 && prevPrevFrameNumber <= 10){
    document.getElementById('f'+prevPrevFrameNumber.toString()).innerHTML
      = updater.game.prevPrevFrameTotal;
  };

  var scoreTotal = 0;
  for(var i = 1; i < 11; i++){
    scoreTotal += Number(document.getElementById('f' + i.toString()).innerHTML);
  };
  document.getElementById('total_score').innerHTML = "Total Score "+ scoreTotal.toString();

};

$(document).ready(function() {
  for(var i = 0; i < 11; i++){
    document.getElementById('btn' + i.toString()).addEventListener("click", function() {
      htmlWriter(Number(this.id.replace('btn', '')));
    });
  };
});
