var BowlingGame = function () {
  this.rolls = [];


BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
   result = 0;
   rollIndex = 0;
   var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {

    if (isStrike()){
     result += strikeAndSpareScore();
     rollIndex += 1;
   } else if (isSpare()) {
      result += strikeAndSpareScore();
      rollIndex += 2;
    } else {
      result += normalScore();
       rollIndex += 2;
    };

  };



return result;

function isStrike(){
  return (game.rolls[rollIndex] == 10);
}

function isSpare(){
  return (game.rolls[rollIndex] + game.rolls[rollIndex +1] == 10);
}

function strikeAndSpareScore(){
  return (game.rolls[rollIndex] + game.rolls[rollIndex +1] + game.rolls[rollIndex +2]);
}

function normalScore(){
  return (game.rolls[rollIndex] + game.rolls[rollIndex +1]);
}

};
};
