class BowlingScore {

  constructor(sheet) {
    this.score_sheet = this.split(sheet);
    this.total_score = 0;
  }

  split(sheet) {
    const new_sheet = []
    sheet = [].concat(...sheet)

    while (sheet.length) {
      new_sheet.push(
        sheet.splice(0,2)
      )
    }

    return new_sheet
  }

  specialCheck() {
    if (this.total_score === 0) {
      return "Total Score: 0 (Gutter Game)";
    } else if (this.total_score === 300) {
      return "Total Score: 300 (Perfect Game!)";
    } else {
      return null;
    }
  }

  getTotal() {

    var frame = 0;

    while (frame <= 9) {

      var score_one = (this.score_sheet[frame][0]);
      var score_two = (this.score_sheet[frame][1]);

      var next_frame = frame + 1;

      if (score_one == 10) {
        this.total_score += 10 + this.score_sheet[next_frame][0];

        if (this.score_sheet[next_frame][1] === "-") {
          this.total_score += this.score_sheet[next_frame+1][0];
        } else {
          this.total_score += this.score_sheet[next_frame][1];
        }

      } else if (score_one + score_two === 10) {
        this.total_score += 10 + this.score_sheet[next_frame][0]
      } else {
        this.total_score += score_one + score_two
      }

      frame += 1
    }

  }

  finalScore() {

    this.getTotal()

    if (this.specialCheck() !== null) {
        return this.specialCheck();
    } else {
      return "Total Score: " + this.total_score;
    }
  }
}

module.exports = BowlingScore;

