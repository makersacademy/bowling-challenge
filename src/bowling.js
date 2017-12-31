function Game() {
  this._rolls = [];
};

Game.prototype.rolls =function(){
  return this._rolls;
};

Game.prototype.roll = function (number) {
    this._rolls.push(number);
};

Game.prototype.score = function(){
  var result = 0;
  var rollIndex = 0;
  for(var frameIndex = 0; frameIndex <10; frameIndex++){
          result += (this._rolls[rollIndex] + this._rolls[rollIndex+1]);
          rollIndex += 2
        }

  return result;

};
