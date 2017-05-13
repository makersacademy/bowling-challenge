function Game() {
  for (var i = 0, a = new Array(21); i < 21;){
    a[i++] = 0;
  }
  this.rolls = a;
  this.currentRoll = 0;
}

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function(){
  var score = 0;
  var frameIndex = 0;
  for(var frame = 0; frame < 10; frame++){
    if(this.isSpare(frameIndex)){
      score += 10 + this.rolls[frameIndex + 2];
      frameIndex += 2
    } else {
      score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
      frameIndex += 2;
    }
  }
  return score;
};

Game.prototype.isSpare = function(frameIndex){
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
};
