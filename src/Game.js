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

Game.prototype.play = function() {
  if(this.rollsLeft(this._frame) === 2) {
    this._frame.play();
    if(this._frame.isStrike === true) {
      console.log("End of frame " + this.currentFrame + "!");
      this.bonusCalculator();
      this.addFrame(this._frame);
      this.changeFrame();
    }
  }
  else if(this.rollsLeft(this._frame) === 1){
    this._frame.play();
    console.log("End of frame " + this.currentFrame + "!");
    this.bonusCalculator();
    this.addFrame(this._frame);
    this.changeFrame();
  }
  else {
    this.bonusCalculator();
    this.addFrame(this._frame);
    this.changeFrame();
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

Game.prototype.bonusCalculator = function() {
  if (this.frames.length > 0) {
    if (this.frames[this.frames.push(this.frames.pop())-1].isStrike === true) {
      this.frames[this.frames.push(this.frames.pop())-1].score = 10 + this._frame.score;
    } else if (this.frames[this.frames.push(this.frames.pop())-1].isSpare === true) {
      this.frames[this.frames.push(this.frames.pop())-1].score = 10 + this._frame.firstShot;
    }
  }
};
