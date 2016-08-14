function Game() {
  this._frames = [];
  this._frame = [];
  this._finalScores = [];
  this.over = false;
}

Game.prototype.bowl = function(score){
  this._frame.push(score);
  if (this.isStrike(this._frame) || this.isSecondBall(this._frame)){
      this.frameComplete(this._frame)}
};

Game.prototype.frameComplete = function(frame) {
  this._frames.push(this._frame);
  this._frame = [];
  this.isGameOver();
}

Game.prototype.isSecondBall = function(frame){
  return frame.length > 1;
};

Game.prototype.isStrike = function(frame){
  return frame[0] === 10;
};

Game.prototype.isSpare = function(frame) {
  var score = frame.reduce(function sum(total, num) {return total + num;});
  return score === 10 && frame.length === 2;
};

Game.prototype.calculateScores = function() {
  var i;
  for (i = 0; i < this._frames.length; i++) {
    this._finalScores.push(this.FrameTotal(
      this._frames[i], this._frames[i+1], this._frames[i+2]));
    }
  };

Game.prototype.FrameTotal = function (frame, nextFrame, secondNextFrame) {
  if (typeof frame === 'undefined') {return 0;}

  if (this.isStrike(frame)) {
    return 10 + this.FrameTotal(nextFrame, secondNextFrame);
  }
  else if (this.isSpare(frame)) {
    return 10 + nextFrame[0];
  }
  else {
    return frame.reduce(function sum(total, num) {return total + num;});
  }
};


Game.prototype.isGameOver = function(){
  if (this._frames.length >= 10)
  { this.over = true; }
}
