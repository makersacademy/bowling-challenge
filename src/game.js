class Game {
  constructor() {
    this.totalScore = 0;
    this.frameScore = []
    this.numberOfFrames = 0
  }

  currentFrameScore() {
    var sum = this.frameScore.reduce(function(a, b){
      return a + b;
  }, 0);
    return sum
  }

  addRoll(num) {
    if (this.numberOfFrames < 10) {
      this.frameScore.push(num)
      if (this.frameScore.length === 2) {
        this.totalScore = this.frameScore.reduce(function(a, b){
          return a + b;
        }, 0);
        this.frameScore = [];
        this.numberOfFrames += 1
      }
    }
  }

};

