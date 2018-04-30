function Game(){
  this.rolls = [];
  this.currentRoll = 0;

}

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function(){
  var score = 0;
  var framesIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.isStrike(framesIndex)) {
      score += 10 + this.strikeBonus(framesIndex);
      framesIndex++;
    } else if (this.isSpare(framesIndex)) {
    score += 10 + this.spareBonus(framesIndex);
    framesIndex += 2;
    } else {
      score += this.sumOfBallsInFrame(framesIndex);
      framesIndex += 2;
    }
  }
  return score;
};

Game.prototype.isStrike = function(framesIndex){
  return this.rolls[framesIndex] === 10;
};

Game.prototype.sumOfBallsInFrame = function(framesIndex) {
  return this.rolls[framesIndex] + this.rolls[framesIndex + 1];
};

Game.prototype.spareBonus = function (framesIndex) {
  return this.rolls[framesIndex + 2];
};

Game.prototype.strikeBonus = function (framesIndex) {
  return this.rolls[framesIndex + 1] + this.rolls[framesIndex + 2];
};

Game.prototype.isSpare = function(framesIndex){
  return this.rolls[framesIndex] + this.rolls[framesIndex + 1] === 10;
};
