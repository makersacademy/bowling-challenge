var Game = function(){
    this.rolls = [];

};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  var scoreTotal = 0;
  var rollIndex = 0;
  var game = this;

  for(var frameIndex = 0; frameIndex < 10; frameIndex++){
    if(gameStrike()){
      scoreTotal += scoreStrike();
      rollIndex++;
    } else if(gameSpare()) {
        scoreTotal += scoreSpare();
        rollIndex += 2;
    } else {
        scoreTotal += scoreNormal();
        rollIndex += 2;
    }
  };
  return scoreTotal;

  function gameSpare(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  };

  function gameStrike(){
    return game.rolls[rollIndex] == 10;
  };
  
  function scoreSpare(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  };

  function scoreStrike(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  };
  
  function scoreNormal(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  };
};