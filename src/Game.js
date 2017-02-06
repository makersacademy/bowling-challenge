'use strict';

function Game (){
  this.frames = [];
  this.total = 0
  this.MAXIMUM_FRAMES = 10;
};

Game.prototype.roll = function (roll1, roll2, roll3) {
  this._maxFrames()
  var frame;
  if (this.frames.length === 10) {
    this._finalFrame(roll1, roll2, roll3)
  }
  else {
    frame = new Frame(roll1, roll2);
  }
  this.frames.push(frame);
};

Game.prototype.getRoll = function (index) {
  return this.frames[index-1];
};

Game.prototype._maxFrames = function () {
  if (this.frames.length === this.MAXIMUM_FRAMES) throw ("Game finished")
};


Game.prototype.totalScore = function() {
  return this.frames.reduce(function(score, frame, index, frames){
    return (score + frame.total(frames[index + 1], frames[index + 2]));
  }, 0);
};


Game.prototype.frameScore = function (frame) {
    if(this.frames[frame-1]._isStrike()) {
      return this.frames[frame-1].total(this.frames[frame])
    }
    else if (this.frames[frame-1]._isSpare()) {
      return this.frames[frame-1].total(this.frames[frame])
    }
    else {
      return this.frames[frame-1].total()
    }
};

Game.prototype.gameOutcome = function () {
  if (this._gutterGame()) {
    return this._gutterGame()
  }
  else if (this._perfectScore()) {
    return this._perfectScore()
  }
  else {
    return this.totalScore()
  }
};

Game.prototype._gutterGame = function () {
  if(this.totalScore() === 0) {
    return "Gutter game :( !"
  }
};

Game.prototype._perfectScore = function () {
  if(this.totalScore() === 300) {
    return "Perfect game! You go glen coco"
  }
};

Game.prototype._finalFrame = function (roll1, roll2, roll3) {
  if (roll1 === 10 || roll2 === 10) {
    var frame;
    frame = new Frame(roll1, roll2, roll3, true);
  }
  else {
    var frame;
    frame = new Frame(roll1, roll2)
  }
};
