var BowlingFrame = function(number) {

  this.number = number;
  this.rollIndex = 0;

  if (number !== 1 && game.currentGame[1] === [null,null]) {
    throw new Error("You must add to frame one first");
  };
  if ( number !== 1 && game.currentGame[number - 1][0] == null ) {
    throw new Error("You must add to frames in order");
  };
};

BowlingFrame.prototype.rollOne = function(input) {
  number = this.number;
  if (game.currentGame[number][0] != null ) {
    throw new Error("You already have a score here");
  };
  if (input > 10 || input < 0) {
    throw new Error("Roll must be between 0 and 10");
  } else {
    rollIndex = this.rollIndex;
    game.currentGame[number][0] = input;
  };
    game.currentScore();
};

BowlingFrame.prototype.rollTwo = function(input) {
  number = this.number;
  rollIndex = 1;
  if (game.currentGame[number][0] == null ) {
    throw new Error("You must add to frame one, roll one first");
  };
  if (game.currentGame[number][1] != null ) {
    throw new Error("You already have a score here");
  };
  if (game.currentGame[number][0] === 10 && number !== 10) {
    throw new Error("You got a strike in this frame, well done!");
  } else if ( number !== 10 && (input > (10 - game.currentGame[number][0]) || input < 0)) {
    throw new Error("Roll must be between 0 and " + (10 - game.currentGame[number][0]));
  } else {
    game.currentGame[number][1] = input;
    game.currentScore();
  };
};

BowlingFrame.prototype.bonusRoll = function(input) {
  number = this.number;
  if ((game.currentGame[number][0] + game.currentGame[number][1]) < 10 || number !== 10 ) {
    throw new Error("You cannot use the bonus roll");
  };
  game.currentGame[number][2] = input;
  game.currentScore();
}

