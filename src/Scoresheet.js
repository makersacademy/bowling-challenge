function Scoresheet() {
  this.frames = []
  this.framesLimit = 10;
}

Scoresheet.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Scoresheet.prototype.frameScoreDisplay = function(n) {
  display = null;
  if((n+1) === this.framesLimit && this.frames[n].rolls[2]) {
    display = this.frames[n].total();
  }
  else if(this.frames[n].rolls[0] === 10 && this.frames[n+1]) {
    if(this.frames[n+1].rolls[1]) {
      display = (this.frames[n].total() + this.frames[n+1].rolls[0] + this.frames[n+1].rolls[1]);
    } else if(this.frames[n+2]) {
      display = (this.frames[n].total() + this.frames[n+1].rolls[0] + this.frames[n+2].rolls[0]);
    };
  } else if(((this.frames[n].rolls[0] + this.frames[n].rolls[1]) === 10) && (this.frames[n+1])) {
    display = (this.frames[n].total() + this.frames[n+1].rolls[0]);
  } else if((this.frames[n].rolls[0] + this.frames[n].rolls[1]) < 10) {
    display = this.frames[n].total();
  }
  return display;
};

Scoresheet.prototype.displayTotal = function() {
  var runningDisplayTotal = 0;
  for(var i = 0; i < this.frames.length; i++) {
    runningDisplayTotal += this.frameScoreDisplay(i);
  }
  return runningDisplayTotal;
};

Scoresheet.prototype.actualTotal = function() {
  var runningActualTotal = 0;
  for(var i = 0; i < this.frames.length; i++) {
    if(scoresheet.frameScoreDisplay(i) != null) {
      runningActualTotal += this.frameScoreDisplay(i);
    } else {
      runningActualTotal += this.frames[i].total();
    }
  }
  return runningActualTotal;
};

Scoresheet.prototype.currFrameOver = function() {
  var currFrame = (this.frames.length - 1);
  if(this.frames.length === this.framesLimit) {
    return ((this.frames[currFrame].rolls[2] != undefined) || ((this.frames[currFrame].rolls[0] + this.frames[currFrame].rolls[1]) < 10));
  } else {
    return ((this.frames[currFrame].rolls[1] != undefined) || (this.frames[currFrame].rolls[0] === 10));
  };
};

Scoresheet.prototype.gameOver = function() {
  if(this.frames.length === this.framesLimit) {
    return ((this.frames[this.framesLimit-1].rolls[2] != undefined) || ((this.frames[this.framesLimit-1].rolls[0]) + (this.frames[this.framesLimit-1].rolls[1]) < 10));
  }
};