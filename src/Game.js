function Game() {
  this.totScore = 0;
}

Game.prototype.newFrame = function () {
  this.frame = new Frame();
};

Game.prototype.pinsKnockedDown = function(number) {
  if (number < 0 || number > 10){
    throw new Error("Please enter a number between 0 and 10");
  }
  this.totScore += number;
};
