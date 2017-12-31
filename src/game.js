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
  var frameIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.isStrike(frameIndex)){
      score += 10 + this.strikeBonus(frameIndex);
      frameIndex ++;
    } else if (this.isSpare(frameIndex)){
      score += 10 + this.spareBonus(frameIndex);
      frameIndex += 2;
    } else {
      score += this.sumofRollsInFrame(frameIndex);
      frameIndex += 2;
    }
  }
  this.score = score
  return score
};

Game.prototype.isSpare = function(frameIndex){
  var rolls = this.rolls
  return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
};

Game.prototype.isStrike = function(frameIndex){
  var rolls = this.rolls
  return rolls[frameIndex] === 10;
};

Game.prototype.spareBonus = function(frameIndex){
  var rolls = this.rolls
  return rolls[frameIndex + 2];
}

Game.prototype.strikeBonus = function(frameIndex){
  var rolls = this.rolls
  return rolls[frameIndex + 1] + rolls[frameIndex + 2];
}

Game.prototype.sumofRollsInFrame = function(frameIndex){
  var rolls = this.rolls
  return rolls[frameIndex] + rolls[frameIndex + 1];
}
