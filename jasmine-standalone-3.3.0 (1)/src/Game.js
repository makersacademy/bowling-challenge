function Game(){
  var rolls = [];
  var frames = [];

  this.roll = function(pins){
    rolls.push(pins)

    var isStrike = (rolls[0] === 10);
    if (isStrike) {
      rolls.push(0); // skip second roll for strikes
    }

    var finishedFrame = (rolls.length === 2);
    if (finishedFrame){
      frames.push(rolls);
      rolls = [];
    }
  }

  this.score = function() {
    var score = 0;

    for(var i = 0; i < frames.length; i++) {
      var currentFrame = frames[i];
      var nextFrame = frames[i+1];

      var currentFrameScore = currentFrame[0] + currentFrame[1];
      var isStrike = currentFrame[0] === 10;
      var isSpare = !isStrike && currentFrameScore === 10;

      if (isStrike) {
        score += currentFrameScore + nextFrame[0] + nextFrame[1];
      } else if (isSpare) {
        score += currentFrameScore + nextFrame[0];
      } else {
        score += currentFrameScore;
      }
    }

    return score;
  }

}
