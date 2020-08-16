class Bowling {
  constructor() {
    this.game = []
    this.scoreArray = []
    this.totalScoreArray = []
    this.total = 0
  }

  roll(score) {
    this.scoreArray.push(score)
    }

  score() {
    for (var i = 0; i < this.scoreArray.length; i+=2) {
      var frame = {};
        if (this.scoreArray[i] === 10){
          frame['roll_1'] = this.scoreArray[i];
          frame['roll_2'] = 0;
          i -= 1;
        } else {
          frame['roll_1'] = this.scoreArray[i];
          frame['roll_2'] = this.scoreArray[i + 1];
        }
          this.game.push(frame);
        }
    }

  saveFrameTotal() {
    for (var i = 0; i < this.game.length; i++) {
      var score = this.game[i]['roll_1'] + this.game[i]['roll_2'];
      this.totalScoreArray.push(score);
    }
  }

  evaluateStrike() {
    for (var i = 0; i < this.game.length; i++) {
      if (this.game[i]['roll_1'] === 10) {
        this.totalScoreArray[i] += (this.game[i + 1]['roll_1'] + this.game[i + 1]['roll_2']);
      }
    }
  }

  evaluateSpare() {
    for (var i = 0; i < this.game.length; i++) {
      if (this.game[i]['roll_1'] === 10) {
        return
      } else if (this.game[i]['roll_1'] + this.game[i]['roll_2'] === 10) {
        this.totalScoreArray[i] += this.game[i + 1]['roll_1']
      }
    }
  }
  tally() {
    for (var i = 0; i < this.totalScoreArray.length; i++) {
      this.total += this.totalScoreArray[i]
    }
  }

}