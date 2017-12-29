function Game(){
  this.score = 0;
  this.rolls = new Array(21).fill(0);
  this.currentRoll = 0;
}

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.calculateScore = function(){
  var score = this.score
  var rollIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.isStrike(rollIndex)){
      score += 10 + this.strikeBonus(rollIndex);
      rollIndex ++;
    } else if (this.isSpare(rollIndex)){
      score += 10 + this.spareBonus(rollIndex);
      rollIndex += 2;
    } else {
      score += this.sumofRollsInFrame(rollIndex);
      rollIndex += 2;
    }
  }
  this.score = score
  return score
};

Game.prototype.isSpare = function(rollIndex){
  var rolls = this.rolls
  return rolls[rollIndex] + rolls[rollIndex + 1] === 10;
};

Game.prototype.isStrike = function(rollIndex){
  var rolls = this.rolls
  return rolls[rollIndex] === 10;
};

Game.prototype.spareBonus = function(rollIndex){
  var rolls = this.rolls
  return rolls[rollIndex + 2];
}

Game.prototype.strikeBonus = function(rollIndex){
  var rolls = this.rolls
  return rolls[rollIndex + 1] + rolls[rollIndex + 2];
}

Game.prototype.sumofRollsInFrame = function(rollIndex){
  var rolls = this.rolls
  return rolls[rollIndex] + rolls[rollIndex + 1];
}
