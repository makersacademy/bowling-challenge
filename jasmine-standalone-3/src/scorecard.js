class Scorecard {
  constructor(rolls) {
    this.rolls = rolls;
  }
  score(rolls) {
    var score = 0
    for(var i = 1; i < 11; i++) {
      score += this.frameScore(i);
    }
    return score;
  };
  frameScore(frame) {
    var fr = frame - 1;
    if (fr == 9) return this.rolls[fr][0] + this.rolls[fr][1] + this.rolls[fr][2];
    var score = (this.rolls[fr][0] + this.rolls[fr][1]);
    if (this.frameOutcome(fr) == 'X') {
      score += (this.rolls[fr + 1][0] + this.rolls[fr + 1][1]);
    } else if (this.frameOutcome(fr) == '/') {
      score += (this.rolls[fr + 1][0]);
    };
    return score;
  };
  frameOutcome(fr) {
    return this.rolls[fr][0] + this.rolls[fr][1] != 10 ? '-' : this.rolls[fr][0] == 10 ? 'X' : '/';
  };
};
