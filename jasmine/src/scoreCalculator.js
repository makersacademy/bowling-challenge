function Calculator(){
  this.score = 0
};

Calculator.prototype.scoreFrame = function (frame) {
  var totalScore = 0
  frame.forEach(function(gameFrame){
    if(scoreCheck(gameFrame.frame) === 'strike') {
      gameFrame.score = gameFrame.frame[0] + frame[frame.indexOf(gameFrame)+1].frame[0] +
      frame[frame.indexOf(gameFrame)+1].frame[1]
      totalScore += gameFrame.score
    } else if (scoreCheck(gameFrame.frame) === 'spare') {
      gameFrame.score = gameFrame.frame[0] + gameFrame.frame[1] + frame[frame.indexOf(gameFrame)+1].frame[0]
      totalScore += gameFrame.score
    } else {
      gameFrame.score = gameFrame.frame[0] + gameFrame.frame[1]
      totalScore += gameFrame.score
    };
  });
  this.score += totalScore
};

function scoreCheck(frame){
  if(frame[0] === 10){
    return 'strike'
  } else if (frame[0] + frame[1] === 10 && frame[0] != 10) {
    return 'spare'
  };
};
