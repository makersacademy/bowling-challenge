function Game() {
  this._rolls = [];
};

Game.prototype.roll = function (number) {
    this._rolls.push(number);
};

Game.prototype.score = function(){
  var result = 0;
  var rollNumber = 0;
  for(var frameIndex = 0; frameIndex <10; frameIndex++){
    result = this._rolls[rollNumber] + this._rolls[rollNumber+1];
    return result;
  }
};
