'use strict';


function Game() {
  this.rollsTracker = [];
  this.frameNumber = 1;
  frameOver = false;
  left = 10;
  frameScore = [];
  this.score = frameScore[frameScore.length - 1] || 0;
}

Game.prototype.roll = (pins) => {
    this.rollsValidation.push(pins);
    if (pins ==10) { this.frameNumber ++
    } else { this.nextFrame(pins); }
};

Game.prototype.nextFrame = (pins) => {
  frameOver = !frameOver
  if (frameOver == true) {this.frameNumber ++}
};



