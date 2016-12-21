function Game() {
this.rolls = []
this.rollIndex = 0;
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
var result = 0;
for (var frameIndex = 0; frameIndex < 10; frameIndex++){
  if(this.isStrike()){
    result += this.strikeScore();
    this.rollIndex++;
  }
  else if (this.isSpare()){
    result += this.spareScore();
    this.rollIndex += 2;
  }else {
    result += this.normalScore();
    this.rollIndex += 2;
  }
}
return result;
};


Game.prototype.isSpare = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10
};

Game.prototype.spareScore = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
}

Game.prototype.strikeScore = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
}


Game.prototype.normalScore = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
}

Game.prototype.isStrike = function() {
  return this.rolls[this.rollIndex] == 10;
}
