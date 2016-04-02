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
    this.frameNumber();
    this.addScore(pins);
    this.totalScore += pins;
};

Bowling.prototype.addScore = function (pins) {
  this.scoreSheet[this.currentFrame].push(pins);
};

Bowling.prototype.frameNumber = function () {
  if(this.scoreSheet[this.currentFrame].length === 2) {
    this.currentFrame ++;
  }
};
