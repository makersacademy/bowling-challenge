function Game() {
  this.frameArray = [(frame1 = new Frame(1)),
                     (frame2 = new Frame(2)),
                     (frame3 = new Frame(3)),
                     (frame4 = new Frame(4)),
                     (frame5 = new Frame(5)),
                     (frame6 = new Frame(6)),
                     (frame7 = new Frame(7)),
                     (frame8 = new Frame(8)),
                     (frame9 = new Frame(9)),
                     (frame10 = new Frame(10))]
  this.scores = []
  this.frameScore = []
  this.runningTotal = 0
}

Game.prototype.logFrameScore = function (number) {
  // var scoreArray = [];
  // scoreArray.push(this.frameArray[number].firstScore);
  // scoreArray.push(this.frameArray[number].secondScore);
  // this.frameScore.push(scoreArray);
  this.runningTotal += this.frameArray[number].frameTotal;
};
