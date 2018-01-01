function Game(){
  this.rolls = [];
};

Game.prototype.roll = function(pins){
  this.rolls.push(pins);
};

Game.prototype.score = function(){
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frame = 0; frame< 10; frame++){

    //checks if it is a spare
    if (isSpare()) {
      // add an additional roll
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    } else {
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }

    rollIndex += 2;
  }
    return result;

    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    }

};
