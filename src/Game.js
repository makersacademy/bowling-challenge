'use strict';

class Game {
  constructor() {
    this.frameScores = [];
    this.strikeBonus = false;
    this.spareBonus = false;
  }

  play(roll1, roll2 = 0) {
    const frame = new Frame();
    frame.executeRolls(roll1, roll2);
    // if (this.strikeBonus === true) {
    //   this.frameScores[i-1] += frame.sumScores();
    // }
    // if (this.spareBonus === true) {
    //   this.frameScores[i-1] += frame.frameScore['roll1'];
    // }
    this.strikeBonus = frame.strike;
    this.spareBonus = frame.spare;
    this.frameScores.push(frame.sumScores());
  }

}
