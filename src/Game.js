function Game() {
this.rolls = []
this.rollIndex = 0;
this.result = 0;
this.frameIndex = 0;
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  if(this.isStrike()){
    this.result += this.strikeScore();
    this.rollIndex++;
  }
  else if (this.isSpare()){
    this.result += this.spareScore();
    this.rollIndex += 2;
  }else {
    this.result += this.normalScore();
    this.rollIndex += 2;
}
return this.result;

};

Game.prototype.finalScore = function() {
  for (var frameIndex = 0; frameIndex < 10; frameIndex++){
    this.score();
  }
  return this.result;
}


Game.prototype.isSpare = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10
};

Game.prototype.spareScore = function() {
  return this.rolls[this.rollIndex] + this.newFrame();
}

Game.prototype.strikeScore = function() {
  return this.rolls[this.rollIndex] + this.newFrame();
}


Game.prototype.normalScore = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
}

Game.prototype.isStrike = function() {
  return this.rolls[this.rollIndex] == 10;
}

Game.prototype.newFrame = function() {
return this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
}
