var Game = function(){
  this._rolls = [];
};

Game.prototype.roll = function(pins){
  this._rolls.push(pins);
};

Game.prototype.score = function(){
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex ++){
    if (isStrike()) {
      result += strikeScore();
      rollIndex ++;
    } else if (isSpare()) {
      result += spareScore();
      rollIndex += 2
    } else {
      result += normalScore();
      rollIndex += 2
    }
  }
  return result;

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
