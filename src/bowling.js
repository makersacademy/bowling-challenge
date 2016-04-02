function Bowling() {
  this.scoreSheet = {1: [], 2: [],
                     3: [], 4: [],
                     5: [], 6: [],
                     7: [], 8: [],
                     9: [], 10: []
                    };
  this.currentFrame = 1;
  this.totalScore = 0;
}

Bowling.prototype.calculateScore = function (pins) {
    this.addScore(pins);
    this.totalScore += pins;
    this.frameNumber(pins);
};

Bowling.prototype.addScore = function (pins) {
  this.scoreSheet[this.currentFrame].push(pins);
};

Bowling.prototype.frameNumber = function (pins) {
  if(this.scoreSheet[this.currentFrame].length === 2) {
    this.currentFrame ++;
  } else if(pins === 10) {
    this.currentFrame ++;
  }
};

Bowling.prototype.isStrike = function () {
  var frame = this.scoreSheet[this.currentFrame - 1][0];
  if(frame === 10) {
    return true;
  } else {
    return false;
  }
};

Bowling.prototype.isSpare = function () {
  var frame = this.scoreSheet[this.currentFrame - 1].reduce(add, 0);
  function add( a, b ) { return a + b }
  if(frame === 10) {
    return true;
  } else {
    return false;
  }
};
