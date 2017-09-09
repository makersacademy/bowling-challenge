 var BowlingGame = function(){
  this.rolls = [];
};

frameScore = function() {
    frame1.innerHTML = game.frameScore['1'];
    frame2.innerHTML = game.frameScore['2'];
    frame3.innerHTML = game.frameScore['3'];
    frame4.innerHTML = game.frameScore['4']
    frame5.innerHTML = game.frameScore['5']
    frame6.innerHTML = game.frameScore['6']
    frame7.innerHTML = game.frameScore['7']
    frame8.innerHTML = game.frameScore['8']
    frame9.innerHTML = game.frameScore['9']
    frame10.innerHTML = game.frameScore['10']
  };
  
BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  result = 0;
  rollIndex = 0;
  var game = this;
  
  for(var frameIndex = 0; frameIndex < 10; frameIndex++ ){
    if ( isStrike() ) {
      result += getStrikeScore();
      rollIndex++;
    }
  else if ( isSpare() ) {
      result += getSpareScore();
      rollIndex += 2;
  } else {
      result += getNormalScore();
      rollIndex += 2;
  }
}
  return result;

  function isStrike () {
    return game.rolls[rollIndex] == 10;
  }
  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10
  }

  function getStrikeScore () {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getSpareScore () {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getNormalScore () {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};