function Game(){
  var rolls = [];
  var frames = [];
  var MAX_FRAMES = 10;
  var STRIKE_POINTS = 10;
  var SPARE_POINTS = 10;

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

    for(var i = 0; (i < frames.length && i < MAX_FRAMES); i++) {
      var currentFrame = frames[i];
      var nextFrame = frames[i+1];

      var currentFrameScore = currentFrame[0] + currentFrame[1];
      var isStrike = currentFrame[0] === STRIKE_POINTS;
      var isSpare = !isStrike && currentFrameScore === SPARE_POINTS;

      if (isStrike && nextFrame) {
        var isNextFrameIsAlsoStrike = nextFrame[0] === STRIKE_POINTS;
        var nextNextFrame = frames[i+2];

        if (isNextFrameIsAlsoStrike && nextNextFrame) {
          score += STRIKE_POINTS + STRIKE_POINTS + nextNextFrame[0];
        } else {
          score += STRIKE_POINTS + nextFrame[0] + nextFrame[1];
        }

      } else if (isSpare) {
        score += SPARE_POINTS + nextFrame[0];
      } else {
        score += currentFrameScore;
      }
    }

    return score;
  }

}
