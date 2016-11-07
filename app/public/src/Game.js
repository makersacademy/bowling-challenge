var Game = function(){
  this._rolls = [];
  this.result = 0;
};

Game.prototype.roll = function(pins){
  this._rolls.push(pins);
};

Game.prototype.score = function(){
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex ++){
    if (isStrike()) {
      this.result += strikeScore();
      rollIndex ++;
    } else if (isSpare()) {
      this.result += spareScore();
      rollIndex += 2
    } else {
      this.result += normalScore();
      rollIndex += 2
    }
  }
  return this.result;

  function isSpare(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] == 10;
  };

  function isStrike(){
    return game._rolls[rollIndex] == 10;
  };

  function spareScore(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] + game._rolls[rollIndex + 2];
  };

  function strikeScore(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] + game._rolls[rollIndex + 2];
  };

  function normalScore(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1]
  }
};
