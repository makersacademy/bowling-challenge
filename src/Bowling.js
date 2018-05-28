function Game() {
  this.frames = [];
  this.frame = [];
  this.pins = 10;
  this.finalFrame = false;
  this.frameScore = 0;
  this.finish = false;
};

Game.prototype.bowl = function(score) {
  this._gameOver();
  this._validScore(score)
  this.frame.push(score);
  this.pins -= score;
  if (this.finalFrame === false) {
    this._endTurn();
  }
  else {
    this._endGame();
    this._resetPins();
  };
};

Game.prototype._endTurn = function() {
  if (this.pins === 0 || this.frame.length === 2) {
  this._runFrame(this.frame);
  this.frame = [];
  this.pins = 10;
  };
};

Game.prototype._endGame = function() {
  if ((this.frame.length === 2 && (this.frame[0] + this.frame[1]) < 10 ) || this.frame.length === 3) {
    this.finish = true;
    this.frames.push(this.frame);
    this.frame = [];
    this.pins = 10;
   }
};

Game.prototype._gameOver = function() {
  if (this.finish === true) {
    throw "Game has finished, start a new game"
  };
};

Game.prototype._resetPins = function() {
  if (this.pins < 1) {
    this.pins = 10
  };
};

Game.prototype._runFrame = function(frame) {
  this.frames.push(frame);
  this._setFrame();
};

Game.prototype._validScore = function(score) {
  if (score > this.pins) {
    throw "please enter a valid score"
  };
};

Game.prototype.score = function(frame){
  this.frameScore = 0
  this._calcFrame(frame);
  return this.frameScore
};

Game.prototype.total = function() {
  var total = 0
  for (i = 1; i <= this.frames.length; i++) {
    total += this.score(i)
  };
  return total
};

Game.prototype._setFrame = function() {
  if (this.frames.length === 9) {
    this.finalFrame = !this.finalFrame
  };
};


Game.prototype._calcFrame = function(frame) {
  this._frameNotComplete(frame);
};

Game.prototype._frameNotComplete = function(frame) {
  if (frame > this.frames.length && this.frame.length === 1  && this.finalFrame === false)  {
    this.frameScore += this.frame[0] }
  else if (this.finalFrame === true && this.finish === false  && this.frame.length === 1) {
    this.frameScore += this.frame[0] }
    else if (this.finalFrame === true && this.finish === false  && this.frame.length === 2) {
      this.frameScore += this.frame[0] + this.frame[1] }
  else if (frame > this.frames.length) {}
  else { this._frameComplete(frame) };
};

Game.prototype._frameComplete = function(frame) {
  for (var i = 0; i < this.frames[frame -1].length; i++) {
    this.frameScore += this.frames[frame - 1][i];
  };
  this._strike(frame);
};

Game.prototype._strike = function(frame) {
  if (this.frameScore === 10  && this.frames[frame - 1][0]  === 10  && this.frames.length > frame)
    { var frameLength
      if (this.frames[frame].length > 2) {frameLength = 2}
      else {frameLength = this.frames[frame].length}
     for (var i = 0; i < frameLength; i++) {
        this.frameScore += this.frames[frame][i];
    };
      if (this.frames[frame][0] === 10 && this.frames.length > (frame + 1) && frame !== 9) {
        this.frameScore += this.frames[frame + 1][0]
      };
    }
    else if (this.frameScore === 10 && this.frames.length > frame){
      this._spare(frame);
    };
};

Game.prototype._spare = function(frame) {
  this.frameScore += this.frames[frame][0]
};
