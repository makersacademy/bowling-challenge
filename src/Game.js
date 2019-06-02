function Game() {
  START_SCORE = 0
  START_FRAME_NUMBER = 1
  START_ROLL_COUNT = 0
  };

Game.prototype.getScore = function() {
  return this.score = START_SCORE;
};

Game.prototype.frame = function() {
  return this.frame = START_FRAME_NUMBER;
};

Game.prototype.rollCount = function() {
  return this.rollCount = START_ROLL_COUNT;
};








