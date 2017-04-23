function Game() {
  this.framesLeft = this.DEFAULTFRAMESLEFT;
  this.frames = [];
  this.currentFrame = 1;
  this._frame = this.createFrame();
}

Game.prototype.DEFAULTFRAMESLEFT = 10;

Game.prototype.createFrame = function() {
  return new Frame();
};

Game.prototype.play = function(score) {
  if (this.framesLeft === 1) {
    this.finalPlay(score);
  } else if (this.framesLeft === 2) {
    this.gamePlay(score);
    this.changeFinalFrame();
  }
  else {
    this.gamePlay(score);
  }
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Game.prototype.changeFrame = function() {
  this.framesLeft -= 1;
  this.currentFrame += 1;
  this._frame = this.createFrame();
};

Game.prototype.rollsLeft = function(frame) {
  return frame.rollsLeft;
};

Game.prototype.changeFinalFrame = function() {
  this._frame = this.createFrame();
  this._frame.rollsLeft += 1;
};

Game.prototype.reduceFrameSize = function() {
  this._frame.rollsLeft -= 1;
};

Game.prototype.finalPlay = function(score) {
  if(this.rollsLeft(this._frame) === 3) {
    this._frame.finalPlay(score);
  }
  else if(this.rollsLeft(this._frame) === 2) {
    this._frame.finalPlay(score);
    if(this._frame.isSpare !== true || this._frame.isStrike !== true)
    {
      this.reduceFrameSize();
      console.log("Game over!");
      this.addFrame(this._frame);
    }
  }
  else if (this.rollsLeft(this._frame) === 1) {
    this._frame.finalPlay(score);
    console.log("Game over!");
    this.addFrame(this._frame);
  }
};

Game.prototype.gamePlay = function(score) {
  if(this.rollsLeft(this._frame) === 2) {
    this._frame.play(score);
    if(this._frame.isStrike === true) {
      console.log("End of frame " + this.currentFrame + "!");
      this.bonusCalculator();
      this.addFrame(this._frame);
      this.changeFrame();
    }
  }
  else {
    this._frame.play(score);
    console.log("End of frame " + this.currentFrame + "!");
    this.bonusCalculator();
    this.addFrame(this._frame);
    this.changeFrame();
  }
};

Game.prototype.bonusCalculator = function() {
  if (this.frames.length > 1) {
    if (this.frames[this.frames.length - 1].isStrike === true &&
        this.frames[this.frames.length - 2].isStrike === true) {
      this.frames[this.frames.length - 2].score = 20 + this._frame.score;
    } else if (this.frames[this.frames.length - 1].isStrike === true) {
      this.frames[this.frames.length - 1].score = 10 + this._frame.score;
    } else if (this.frames[this.frames.length - 1].isSpare === true) {
      this.frames[this.frames.length - 1].score = 10 + this._frame.firstShot;
    }
  }
  else if (this.frames.length === 1) {
    if (this.frames[this.frames.length - 1].isStrike === true) {
      this.frames[this.frames.length - 1].score = 10 + this._frame.score;
    } else if (this.frames[this.frames.length - 1].isSpare === true) {
      this.frames[this.frames.length - 1].score = 10 + this._frame.firstShot;
    }
  }
};
