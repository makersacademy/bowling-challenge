class Frame{
  constructor() {
    this.score = [];
    this.MAXSCORE = 10;
    this.isStrike = false;
    this.isSpare = false;
    this.frame = 1;
  };

  roll(pins) {
    this.score.push(pins);
  };

  game() {
    for (var frame = 0, frame < 10, frame++) {
      
    }
  }

};