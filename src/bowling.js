function Game() {
this.score = 0
this.frames = {}
this.bowlCount = []
this.rollCount = 0
this.isStrike = false
}

Game.prototype.bowl = function(pins) {
if(this.bowlCount.length < 21 && pins < 11) {
this.bowlCount.push(pins);
this.updateScore(pins);
this.updateRollCount();
this.confirmIsStrike();
} else if(this.bowlCount.length < 21 && pins > 10){
  throw "You can't enter a score greater than 10."
} else {
  throw "The game is complete.";
  }
};

Game.prototype.updateScore = function(pins) {
  this.score += pins;
};

Game.prototype.updateRollCount = function() {
  this.rollCount ++;
}

Game.prototype.confirmIsStrike = function() {
  if(this.bowlCount.slice(-1)[0] === 10) {
    this.isStrike = true;
  };
}
