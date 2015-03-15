var ScoreBoard = function (){
  this.totalScore = 0;
  this.frames = [];
};

ScoreBoard.prototype.addFrame = function(frame) {
  if(this.frames.length === 10) {
      throw new Error("Game can only have 10 frames")
    };
    this.totalScore = frame.frameScore() + this.totalScore;
    this.frames.push(frame);
    return this.totalScore;
};

ScoreBoard.prototype.nextFrame = function(frame) {
  var current = this.frames.indexOf(frame);
  var next = current + 1;
  return this.frames[next];
};

