'use strict';

function Frame(frameNum) {
  this.balls = [];
  this.complete = false;
  this.frameNumber = frameNum;
  this.pins = 10;
}

Frame.prototype.addBall = function (score) {
  if(this.complete === false){
    this.balls.push(score);
    this._checkPins(score);
    this._checkComplete();
  }
  else{
    throw 'Cannot add ball to a frame that is already complete'
  }
};

Frame.prototype.isComplete = function () {
  return this.complete;
};

Frame.prototype.getFrameScore = function (nextBallOne = 0, nextBallTwo = 0) {
  var score = this._calculateScore();
  if(this.frameNumber < 10){
    if(this.balls[0] === 10) { score = score + nextBallOne + nextBallTwo; }
    if((this.balls[0] + this.balls[1]) > 9) { score = score + nextBallOne; }
  }
  return score;
};

Frame.prototype.printFrame = function(){
  if(this.frameNumber < 10){
    return this._printBallBasic();
  }
  else{
    return this._printBallFinal();
  }
};

Frame.prototype._printBallBasic = function(){
  if(this.balls.length === 1){
    if(this.balls[0] === 10){
      return "X";
    }
    else{
      return this.balls[0];
    }
  }
  else{
    var spares = [[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]];
    console.log(spares);
    console.log(this.balls);
    if(spares.contains(this.balls)){
      return this.balls[0] + " | /";
    }
    else if(this.balls[0] === 10){
      return "X";
    }
    else {
      return this.balls[0] + " | " + this.balls[1];
    }
  }
};

Frame.prototype._printBallFinal = function(){
  var spares = [[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]];
  if(spares.contains(this.balls)){
    return this.balls[0] + " | /";
  }
  else if(this.balls.length === 1 && this.balls[0] === 10){
    return "X";
  }
  else {
    return this.balls[0] + " | " + this.balls[1];
  }
};

Array.prototype.contains = function (itemSearch) {
  this.forEach(function(item){
    console.log(item)
    console.log(itemSearch)
    if (item === Array(itemSearch)) return true;
  });
  return false;
}

Frame.prototype._getPins = function () {
  return this.pins;
};

Frame.prototype._checkPins = function(score){
  this.pins -= score;
  if(this.balls.length === 1 && this.balls[0] === 10){
    this.pins = 10;
  }
  if(this.balls.length === 2 && this.balls[0] + this.balls[1] > 9){
    this.pins = 10;
  }
};

Frame.prototype._checkComplete = function () {
  if(this.frameNumber < 10){
    if(this.balls.length > 1 || this.balls[0] === 10){
      this._completeFrame();
    }
  }
  else {
    if(this.balls.length > 2 || (this.balls.length === 2 && this._calculateScore() < 10)){
      this._completeFrame();
    }
  }
};

Frame.prototype._completeFrame = function () {
  this.complete = true;
  this.pins = 0;
};

Frame.prototype._calculateScore = function () {
  return this.balls.reduce(function(a, b) {
    return a + b;
  }, 0);
};
