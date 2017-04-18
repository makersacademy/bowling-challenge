function Game() {
  this.framesTotal = [];
  // this.frameKlass = frame;
}

Game.prototype.addFrames = function (frame) {
  if (this.framesTotal.length < 10) {
    this.framesTotal.push(frame);
  } else {
    throw new Error("You have reached the limit of frames for the game");
}

Game.prototype.score = function () {
  var gameScore = 0;
  for (var i = 0; i < this.framesTotal.length; i++) {
    gameScore += this.framesTotal[i].score;
    if (this.framesTotal[i].bonus === "strike") {
      gameScore += (this.framesTotal[i + 1].score);
    }
    if (this.framesTotal[i].bonus === "spare") {
      gameScore += (this.framesTotal[i + 1].rolls[0]);
    }
  }
  return gameScore;
};

};
