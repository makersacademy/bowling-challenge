function Frame() {
  this.frames = []
}

Frame.prototype.inputFrame = function(frame) {
  this.frames.push(frame);
}

Frame.prototype.calcTotalScore = function() {
    total = 0
    for(i = 0; i < this.frames.length; i++) {
      if (this.frames[i][0] === 10) {
        score = this.frames[i][0] + this.frames[i+1][0] + this.frames[i+1][1];
        total += score;
      } else if (this.frames[i][0] + this.frames[i][1] === 10) {
        score = this.frames[i][0] + this.frames[i][1] + this.frames[i+1][0];
        total += score;
      } else {
        score = this.frames[i][0] + this.frames[i][1];
        total += score;
      };
    };
    return total;
};

Frame.prototype.calcFrameScore = function(i) {
  if (this.frames[i][0] === 10) {
    return this.frames[i][0] + this.frames[i+1][0] + this.frames[i+1][1];
  } else if (this.frames[i][0] + this.frames[i][1] === 10) {
    return this.frames[i][0] + this.frames[i][1] + this.frames[i+1][0];
  } else {
    return this.frames[i].reduce((a, b) => a + b);
  };
};
