function Game() {
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.framePins = 10;
  this.frameScore = [];
  this.totalScore = 0;
  this.strikeMode = false;
  this.previousFrameScore = 0;
};

Game.prototype.bowl = function(pins) {
  if (this.currentBowl == 1) {
    this.frameScore[0] = pins;
  } else if (this.currentBowl == 2) {
    this.frameScore[1] = pins;
  };
  this._calcFrame();
  if (this.frameScore.length == 2) {
    this._calcBowlScore(this.frameScore);
    this.frameScore = [];
  };
  this.framePins -= pins;
  this.currentBowl ++;
  if (this.currentBowl == 3) {
    this.currentBowl = 1;
    this.framePins = 10;
  };
};

Game.prototype._calcFrame = function () {
    if (this.currentBowl == 2) {
      this.currentFrame ++;
    };
    if (this.currentFrame == 11) {
      alert(`GAME OVER // Final Score is ${this.totalScore}`);
    };
};

Game.prototype._calcBowlScore = function (framescore) {
  this.totalScore += (framescore[0] + framescore[1]);
    // if ((this.strikeMode == true) && (this.currentBowl == 1)) {
    //   this.score = this.score + (2 * pins)
    // } else if ((this.strikeMode == true) && (this.currentBowl == 2)) {
    //   this.score = this.score + (2 * pins)
    //   this.strike

};
