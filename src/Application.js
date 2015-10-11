updater = new BowlingScoreUpdater();

var htmlRoundNumber = 1;

var htmlWriter = function(score){

  if ((updater.frameRoundsLeft === 1 && updater.currentFrameTotal + score > 10) || htmlRoundNumber > 21) {
    return;
  };

  if (score === 10 && updater.frameRoundsLeft === 0){
    if (htmlRoundNumber < 19) {htmlRoundNumber += 1};
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = 'X';
  } else if (updater.currentFrameTotal + score === 10 && updater.frameRoundsLeft === 1) {
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = '/';
  } else {
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = score;
  };
  htmlRoundNumber += 1;

  updater.newRound(score);

  var currentFrameNumber = updater.currentFrameNumber;
  var prevFrameNumber = updater.currentFrameNumber - 1;
  var prevPrevFrameNumber = updater.currentFrameNumber - 2;

  if (currentFrameNumber >= 1 && currentFrameNumber <= 10){
    document.getElementById('f'+ currentFrameNumber.toString()).innerHTML
      = updater.currentFrameTotal;
  };

  if (prevFrameNumber >= 1 && prevFrameNumber <= 10){
    document.getElementById('f'+ prevFrameNumber.toString()).innerHTML
      = updater.prevFrameTotal;
  };

  if (prevPrevFrameNumber >= 1 && prevPrevFrameNumber <= 10){
    document.getElementById('f'+prevPrevFrameNumber.toString()).innerHTML
      = updater.prevPrevFrameTotal;
  };

  var scoreTotal = 0;
  for(i = 1; i < 11; i++){
    scoreTotal += Number(document.getElementById('f' + i.toString()).innerHTML);
  };
  document.getElementById('total_score').innerHTML = scoreTotal;

};

document.addEventListener('DOMContentLoaded', function() {
  for(i = 0; i < 11; i++){
    document.getElementById('btn' + i.toString()).addEventListener("click", function() {
      htmlWriter(Number(this.id.replace('btn', '')));
    });
  };
});









// function bowlingScore() {
//   this.rawScores = []
// };
//
// bowlingScore.prototype.addNewRoundScore= function(score) {
//   this.rawScore.push(score);
// };
//
// var test = new bowlingScore();
// test.addNewRoundScore(7);
// test.addNewRoundScore(7);
