Game = function(roller = roll) {
  this.roller = roller
  this.updateScores = scoreUpdater
  this.bowl = bowl
  this.runningTotal = runningTotal
  this.printScores = printScores
  this.ballPins = []
  this.currentFrame = 1
  this.frames = [new Frame(1, this.roller), new Frame(2, this.roller),
    new Frame(3, this.roller), new Frame(4, this.roller),
    new Frame(5, this.roller), new Frame(6, this.roller),
    new Frame(7, this.roller), new Frame(8, this.roller),
    new Frame(9, this.roller), new FinalFrame(this.roller)]

  };
