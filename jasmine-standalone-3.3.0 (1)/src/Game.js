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
      var frameScore = frames[i][0] + frames[i][1];
      var isStrike = frames[i][0] === 10;
      var isSpare = !isStrike && frameScore === 10;

      if (isStrike) {
        score += frameScore + frames[i+1][0] + frames[i+1][1];
      } else if (isSpare) {
        score += frameScore + frames[i+1][0];
      } else {
        score += frameScore;
      }
    }

    return score;
  }

}
