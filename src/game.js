
function Game() {
  this._frames = [];
  this._frame = new Frame();
  this._scores = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: []
    };
  this._totalScore = 0;
}

//getter functions

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.frame = function() {
  return this._frame;
};

Game.prototype.scores = function() {
  return this._scores;
};

Game.prototype.totalScore = function() {
  return this._toalScore;
};

//functions to aid with scoring

Game.prototype.FrameNo = function() {
  return this._frames.length + 1;
};

Game.prototype.isFirstFrame = function() {
  if (this.frames.length == 0) return true;
};

Game.prototype.FrameIndex = function() {
  return this.frames.length;
};

Game.prototype.saveFrame = function() {
  if (this.frame.isOver == false) throw new Error ("Frame is not over");
  this._frames.push(this._frame);
  this._frame = new Frame();
};

//refactor to get rid of / and X - they create problems

Game.prototype.addToScores = function() {
  var score = this._frame.score();
  var frameNumber = this.FrameNo();
  if (frameNumber == 1)
   {this.addFirstFrameScore();
   }else if (this._frames[frameNumber - 2].isSpare() == true) {
    this._scores[frameNumber - 1] = (10 + this._frame.bowls()[0]);
  }else if (this._frames[frameNumber - 2].isStrike() == true) {
   this._scores[frameNumber - 1] = (10 + this._frame.bowls()[0] + this._frame.bowls()[1]);
   }else if (this._frame.isOpenFrame() == true) this._scores[frameNumber] = score; {
  this.totalScore();
}
};

Game.prototype.addFirstFrameScore = function() {
  var score = this._frame.score();
  var frameNumber = this.FrameNo();
  if (this._frame.isOpenFrame() == true) this._scores[frameNumber] = score;
  this.totalScore();
};

Game.prototype.totalScore = function() {
  var totals = Object.values(this._scores);
  this._totalScore = Number(totals.reduce(this._add, 0));
  console.log(this._totalScore);
};

Game.prototype._add = function (a, b) {
    return a + b;
};
