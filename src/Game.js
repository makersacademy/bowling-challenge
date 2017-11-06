const STRIKE = 10;
const SPARE = 10;

function Game() {
  this._rolls = []
}

Game.prototype.rolls = function() {
  return this._rolls;
};

Game.prototype.roll = function(roll) {
  this._rolls.push(roll);
};

Game.prototype.getFinalScore = function() {
  return this.getFrameScore(9);
}

Game.prototype.getFrameScore = function(frame){

  var result = 0;
  var rollIndex = 0;
  for(var frameIndex = 0; frameIndex <= frame; frameIndex++) {
    if(this.isStrike(rollIndex)) {
      result += this.getStrikeScore(rollIndex);
      rollIndex ++;
    }else if(this.isSpare(rollIndex)){
      result += this.getSpareScore(rollIndex);
      rollIndex += 2;
    }else{
      result += this._rolls[rollIndex] + this._rolls[rollIndex + 1];
      rollIndex += 2;
    };
  }
  return result;

};

Game.prototype.isStrike = function(rollIndex){
  return this._rolls[rollIndex] == 10;
}

Game.prototype.getStrikeScore = function(rollIndex){
  return STRIKE + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
}

Game.prototype.isSpare = function(rollIndex){
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] == 10;
}

Game.prototype.getSpareScore = function(rollIndex){
  return SPARE + this._rolls[rollIndex + 2];
}
