class Game {
  constructor() {
    this.totalScore = 0;
    this.frameScore = []
  }

  currentScore() {
    return this.totalScore;
  }
  myFunction(total, value) {
    return total + value;
    }

  currentFrameScore() {
    var sum = this.frameScore.reduce(function(a, b){
      return a + b;
  }, 0);
    return sum
  }

  addRoll(num) {
    this.frameScore.push(num)
    if (this.frameScore.length === 2) {
      this.totalScore = this.frameScore.reduce(function(a, b){
        return a + b;
      }, 0);
      this.frameScore = [];
    }
  }

};

