function ScoreCard() {
  this._frames = 1;
  this.total = 0;
  this.game = {};

}

ScoreCard.prototype.newFrame = function() {
  if (this._frames > 10) {
    throw new Error("There cannot be more than 10 frames in a game")
  }
  this.game["frame" + this._frames] = {roll1: 0, roll2: 0, bonus: 0};
  this._frames += 1;
}

ScoreCard.prototype.roll = function(number) {
  if(this.integerCheck(number)) {
    throw new Error("Please enter a number between 0 and 10");
  }
  this.game.frame1.roll1 = 5
};

ScoreCard.prototype.integerCheck = function(number) {
  return (isNaN(number) || number < 0 || number > 10);
}
