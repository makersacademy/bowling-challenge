function Game() {
  this._rolls = []
}

Game.prototype.rolls = function() {
  return this._rolls;
};

Game.prototype.roll = function(roll) {
  this._rolls.push(roll);
};

Game.prototype.score = function(){
  const STRIKE = 10;
  const SPARE = 10;
  var result = 0;
  var rollIndex = 0;
  var game = this;
  for(var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if(isStrike()) {
      getStrikeScore();
      rollIndex += 1;
    }else if(isSpare()){
      getSpareScore();
      rollIndex += 2;
    }else{
      result += game._rolls[rollIndex] + game._rolls[rollIndex + 1];
      rollIndex += 2;
    };
  }
  return result;

  function isStrike(){
    return game._rolls[rollIndex] == 10;
  }
  function getStrikeScore(){
    result += STRIKE + game._rolls[rollIndex + 1] + game._rolls[rollIndex + 2];
  }
  function isSpare(){
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] == 10;
  }
  function getSpareScore(){
    result += SPARE + game._rolls[rollIndex + 2];
  }

};
