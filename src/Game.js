'use strict';

function Game (){
  this.frames = [];
  this.total = 0
  this.MAXIMUM_FRAMES = 10;
}

Game.prototype.roll = function (roll1, roll2, roll3) {
  var frame;
  if (this.frames.length === 9) {
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

Game.prototype.totalScore = function () {
  this.total = 0;
  for (var i=0; i<this.frames.length; i++) {
    if (i === 10) {break;}
    this.total += this.frames[i].total(this.frames[i+1], this.frames[i+2])
  }
  return this.total
};

Game.prototype.frameScore = function (frame) {
  return this.frames[frame-1].total(this.frames[frame], this.frames[frame+1])
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
  if(this.totalScore() === 320) {
    return "Perfect game! You go glen coco"
  }
};

Game.prototype._finalFrame = function (roll1, roll2, roll3) {
  if (roll1 === 10 || roll2 === 10 || (roll1 + roll2 === 10)) {
    var frame;
    frame = new Frame(roll1, roll2, roll3, true);
    this.frames.push(frame);
  }
  else {
    var frame;
    frame = new Frame(roll1, roll2)
    this.frames.push(frame);
  }
};
