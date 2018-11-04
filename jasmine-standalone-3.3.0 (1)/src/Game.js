function Game(){
  var rolls = [];
  var frames = [];

  this.roll = function(pins){
    rolls.push(pins)

    if(rolls.length === 2){
      frames.push(rolls);
      rolls = [];
    }
  }

  this.score = function() {
    var score = 0;

    for(var i = 0; i < frames.length; i++) {
      var frameScore = frames[i][0] + frames[i][1];
      var isSpare = frameScore === 10;

      if (isSpare) {
        score += frameScore + frames[i+1][0];
      } else {
        score += frameScore;
      }

    }

    return score;
  }

}
