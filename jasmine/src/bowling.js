class Bowling {
  constructor() {
    this.game = []
    this.scoreArray = []
    this.totalScore = 0
  }

  roll(score) {
    this.scoreArray.push(score)
  }

  score() {
    for (var i = 0; i < this.scoreArray.length; i+=2) {
      var frame = {};
          frame['roll_1'] = this.scoreArray[i];
          frame['roll_2'] = this.scoreArray[i + 1];
          this.game.push(frame);
        }
    }

  tally() {
    for (var i = 0; i < this.game.length; i++) {
      var score = this.game[i]['roll_1'] + this.game[i]['roll_2'];
      this.totalScore += score;
    }
  }

}