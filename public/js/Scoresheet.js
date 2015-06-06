function Scoresheet() {
  this.frames = []
  this.framesLimit = 10;
}

Scoresheet.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Scoresheet.prototype.frameScoreDisplay = function(frameNo) {
  var display = null;
  var currFrameRoll1 = this.frames[frameNo].rolls[0];
  var currFrameRoll2 = this.frames[frameNo].rolls[1];
  var currFrameRoll3 = this.frames[frameNo].rolls[2];
  var currFrameTotal = this.frames[frameNo].total();
  var nextFrame = this.frames[frameNo + 1];
  if(nextFrame) {var nextFrameRoll1 = this.frames[frameNo + 1].rolls[0];}
  if(nextFrame) {var nextFrameRoll2 = this.frames[frameNo+1].rolls[1];}
  var nextNextFrame = this.frames[frameNo + 2];
  if(nextNextFrame) {var nextNextFrameRoll1 = this.frames[frameNo + 2].rolls[0];}

  if(frameNo+1 === this.framesLimit && currFrameRoll3) {
    display = currFrameTotal;
  }
  else if(currFrameRoll1 === frame.pins && nextFrame) {
    if(nextFrameRoll2) {
      display = (currFrameTotal + nextFrameRoll1 + nextFrameRoll2);
    } else if(nextNextFrame) {
      display = (currFrameTotal + nextFrameRoll1 + nextNextFrameRoll1);
    };
  } else if((currFrameRoll1 + currFrameRoll2) === frame.pins && nextFrame) {
    display = (currFrameTotal + nextFrameRoll1);
  } else if((currFrameRoll1 + currFrameRoll2) < frame.pins) {
    display = currFrameTotal;
  }
  return display;
};

Scoresheet.prototype.currFrameOver = function() {
  var currFrame = (this.frames.length - 1);
  var currFrameRoll1 = this.frames[currFrame].rolls[0];
  var currFrameRoll2 = this.frames[currFrame].rolls[1];
  var currFrameRoll3 = this.frames[currFrame].rolls[2];

  if(this.frames.length === this.framesLimit) {
    return (currFrameRoll3 != undefined || (currFrameRoll1 + currFrameRoll2) < frame.pins);
  } else {
    return (currFrameRoll2 != undefined || currFrameRoll1 === frame.pins);
  };
};

Scoresheet.prototype.gameOver = function() {
  if(this.frames.length === this.framesLimit) {
    var finalFrameRoll1 = this.frames[this.framesLimit-1].rolls[0];
    var finalFrameRoll2 = this.frames[this.framesLimit-1].rolls[1];
    var finalFrameRoll3 = this.frames[this.framesLimit-1].rolls[2];

    return (finalFrameRoll3 != undefined || (finalFrameRoll1 + finalFrameRoll2) < frame.pins);
  }
};