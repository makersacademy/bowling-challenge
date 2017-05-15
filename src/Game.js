Game = function(roller = roll) {
  this.roller = roller
  this.updateScores = scoreUpdater
  this.bowl = bowl
  this.ballPins = []
  this.currentFrame = 1
  this.frames = [new Frame(1, this.roller), new Frame(2, this.roller),
    new Frame(3, this.roller), new Frame(4, this.roller),
    new Frame(5, this.roller), new Frame(6, this.roller),
    new Frame(7, this.roller), new Frame(8, this.roller),
    new Frame(9, this.roller), new FinalFrame(this.roller)]

  };

  Game.prototype.runningTotal = function() {
    return this.frames.reduce(function(accumulator, item) {
      return accumulator + item.finalFrameScore }, 0);
  };

  Game.prototype.printScores = function() {
    console.log("Your score is " + this.runningTotal())
    var times = 10;
    for(var i=1; i <= times; i++){
      console.log("Frame " + i + ": " + this.frames[i-1].finalFrameScore)
    }
  };
