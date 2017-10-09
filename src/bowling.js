function Game() {
this.score = 0
this.bowlCount = []
this.rollCount = 0
this.isStrike = false
this.isSpare = false
}

Game.prototype.bowl = function(pins) {
if(this.bowlCount.length < 21 && pins < 11) {
this.bowlCount.push(pins);
this.confirmIsStrike();
this.confirmIsSpare();
this.updateRollCount();
} else if(this.bowlCount.length < 21 && pins > 10){
  throw "You can't enter a score greater than 10."
} else {
  throw "The game is complete.";
  }
};


Game.prototype.updateRollCount = function() {
  if (this.isStrike) {
    this.rollCount++;
  } else {
    this.rollCount += 2;
  }
}

Game.prototype.confirmIsStrike = function() {
  if(this.bowlCount[this.rollCount] === 10) {
    this.isStrike = true;
  }
}

Game.prototype.confirmIsSpare = function() {
  if(this.bowlCount.slice(-1)[0] + this.bowlCount.slice(-2)[0] === 10) {
    this.isSpare = true
  }
