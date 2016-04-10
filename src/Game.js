function Game(){
  this.rolls = [];
  this.currentRoll = 0;
}

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function(){
  var index = 0;
  var score = 0;
  for (var frame = 0; frame < 10; frame++){
    if(this.isStrike(index)){
      score += 10 + this.strikeBonus(index);
      index++;
    } else if(this.isSpare(index)){
      score += 10 + this.spareBonus(index);
      index += 2;
    } else {
      score += this.sumPins(index);
      index += 2;
    }
  }
  return score;
};

Game.prototype.isStrike = function (index) {
  return this.rolls[index] === 10;
};

Game.prototype.isSpare = function (index) {
  return this.rolls[index] + this.rolls[index+1] === 10;
};

Game.prototype.strikeBonus = function (index) {
  return this.rolls[index+1] + this.rolls[index+2];
};

Game.prototype.spareBonus = function (index) {
  return this.rolls[index+2];
};

Game.prototype.sumPins = function (index) {
  return this.rolls[index] + this.rolls[index+1];
};
