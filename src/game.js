var Game = function(arrayOfRolls){
  this.arrayOfRolls = arrayOfRolls
  this.allFrames = []
  this.rolls = []
  this.asignInputToFrames(this.arrayOfRolls);
};

Game.prototype.asignInputToFrames = function() {
  while(this.arrayOfRolls.length > 0){
    var frame = new Frame();
    this.putRollIn(frame);
    if (!frame.is_over){
      this.putRollIn(frame);
    }
    this.allFrames.push(frame);
  };
};

Game.prototype.putRollIn = function(frame) {
  var currRoll = this.arrayOfRolls.shift();
  frame.roll(currRoll)
  this.rolls << currRoll
};

Game.prototype.scoreForFrame = function(n) {
  var scorecard = new ScoreCard(n, this.allFrames)
  return scorecard.score;
};
