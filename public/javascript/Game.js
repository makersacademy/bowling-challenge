var Game = function () {
  this.rolls = [];
  this.rollsByFrame = [];
  this.scoreByFrame = [];
  this.currentFrame = 1;
  this.currentTurn = 1;
};

Game.prototype.roll = function(number){
  if (this.currentTurn == 1 & number == 10) {
    this.rolls.push(number);
    this.rolls.push(0);
    this.currentFrame ++;
  } else if (this.currentTurn == 1) {
    this.rolls.push(number);
    this.currentTurn ++;
  } else {
    this.rolls.push(number);
    this.currentFrame ++;
    this.currentTurn = 1;
  };

  var framesWithAtLeastOneRoll = Math.ceil(this.rolls / 2);
  this.rollsByFrame = frameRollsCalculator(this.rolls, framesWithAtLeastOneRoll);
  frameScoreCalculator();
};

Game.prototype.frameScoreCalculator = function(){

  var frameScores = this.rollsByFrame.map (function(frame) {
    var frameScore = frame.reduce(function(prev, cur) {
      return prev + cur;
    });
    return frameScore
  });

  frameScoreAdjustor(this.rolls, frameScores);

  this.scoreByFrame = frameScores;
};

Game.prototype.frameRollsCalculator = function(a, n) {
    var len = a.length, out = [], i = 0;
    while (i < len) {
      var size = Math.ceil((len - i) / n--);
      out.push(a.slice(i, i += size));
    };
  return out;
}; 

Game.prototype.frameScoreAdjustor = function(rolls, frameScores) {
  for (i = 0; i < rolls.length; i++) {
    if (rolls[i] == 10 && rolls[i+2] != null && (i % 2 ) == 0) {
      var adjustment = rolls[i+1] + rolls[i+2];
      var frameIdentifier = Math.floor(i/2);
      frameScores[frameIdentifier] += adjustment;
    };

    if (i > 1 && ((rolls[i-1] + rolls[i-2]) == 10) && (i % 2) == 1) {
      frameScores += rolls[i];
    };
  };
}; 





