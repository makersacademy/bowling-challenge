function ScoreCalculator() {
  this.score = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    'bonus': []
  };


}

ScoreCalculator().prototype.addFrame = function(frameNumber, rollOne = 0, rollTwo = 0) {
  this.score[frameNumber] = [rollOne, rollTwo]
};

ScoreCalculator().prototype.calculate = function(score = this.score) {
  score
}
