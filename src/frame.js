function Frame() {
  this.frames = []
}

Frame.prototype.inputFrame = function(frame) {
  this.frames.push(frame);
}

Frame.prototype.calcTotalScore = function() {
    total = 0
    for(i = 0; i < 9; i++) {
      if (this.isStrike(i)) {
        total += this.calcStrike(i);
      } else if (this.isSpare(i)) {
        total += this.calcSpare(i);
      } else {
        total += this.calcNormal(i);
      };
    };
    total += this.calcBonus();
    return total;
};

Frame.prototype.calcFrameScore = function(i) {
  if (this.isStrike(i)) {
    if (i === 9) {
      return this.calcBonus()
    } else {
      return this.calcStrike(i)
    };
  } else if (this.isSpare(i)) {
    if (i === 9) {
      return this.calcBonus()
    } else {
      return this.calcSpare(i)
    };
  } else {
    return this.calcNormal(i);
  };
};

Frame.prototype.calcStrike = function(i) {
  return this.frames[i][0] + this.frames[i+1][0] + this.frames[i+1][1];
};

Frame.prototype.calcSpare = function(i) {
  return this.frames[i][0] + this.frames[i][1] + this.frames[i+1][0];
};

Frame.prototype.calcNormal = function(i) {
  return this.frames[i].reduce((a, b) => a + b);
};

Frame.prototype.isStrike = function(i) {
 return this.frames[i][0] === 10
};

Frame.prototype.isSpare = function(i) {
  return this.frames[i][0] + this.frames[i][1] === 10
};

Frame.prototype.calcBonus = function() {
  if (this.frames[9][0] === 10 || this.frames[9][0] + this.frames[9][1] === 10) {
    return this.frames[9][0] + this.frames[9][1] + this.frames[9][2]
  } else {
    return this.frames[9][0] + this.frames[9][1]
  };
};
