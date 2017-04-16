function Scoresheet() {
  this.frames = []
  this.framesLimit = 10;
}

Scoresheet.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Scoresheet.prototype.frameScoreDisplay = function(frameNo) {
  display = null;
  if((frameNo+1) === this.framesLimit && this.frames[frameNo].rolls[2]) {
    display = this.frames[frameNo].total();
  }
  else if(this.frames[frameNo].rolls[0] === frame.pins && this.frames[frameNo+1]) {
    if(this.frames[frameNo+1].rolls[1]) {
      display = (this.frames[frameNo].total() + this.frames[frameNo+1].rolls[0] + this.frames[frameNo+1].rolls[1]);
    } else if(this.frames[frameNo+2]) {
      display = (this.frames[frameNo].total() + this.frames[frameNo+1].rolls[0] + this.frames[frameNo+2].rolls[0]);
    };
  } else if(((this.frames[frameNo].rolls[0] + this.frames[frameNo].rolls[1]) === frame.pins) && (this.frames[frameNo+1])) {
    display = (this.frames[frameNo].total() + this.frames[frameNo+1].rolls[0]);
  } else if((this.frames[frameNo].rolls[0] + this.frames[frameNo].rolls[1]) < frame.pins) {
    display = this.frames[frameNo].total();
  }
  return display;
};

Scoresheet.prototype.currFrameOver = function() {
  var currFrame = (this.frames.length - 1);
  if(this.frames.length === this.framesLimit) {
    return ((this.frames[currFrame].rolls[2] != undefined) || ((this.frames[currFrame].rolls[0] + this.frames[currFrame].rolls[1]) < frame.pins));
  } else {
    return ((this.frames[currFrame].rolls[1] != undefined) || (this.frames[currFrame].rolls[0] === frame.pins));
  };
};

Scoresheet.prototype.gameOver = function() {
  if(this.frames.length === this.framesLimit) {
    return ((this.frames[this.framesLimit-1].rolls[2] != undefined) || ((this.frames[this.framesLimit-1].rolls[0]) + (this.frames[this.framesLimit-1].rolls[1]) < frame.pins));
  }
};