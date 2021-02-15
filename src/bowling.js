class Bowling {

  constructor() {
    this.frames = [];
    this.currentFrame = new Frame;
  }

  roll(pinsDowned) {
    this.currentFrame.addTurn(pinsDowned);
    if (this.currentFrame.inTurn === false) {
      this.frames.push(this.currentFrame);
      if (this.frames.length === 10) {
        if (this.currentFrame.pinsKnocked.reduce((a, b) => a + b, 0) === 10 )
        {this.currentFrame.inTurn = true;}
        else { return this.score().reduce((a, b) => a + b, 0); };
      }
      this.currentFrame = new Frame;
    }
  }

  score() {
    let startingIndex = 0;
    let score = [];
    this.frames.forEach( frame => {
      score.push( frame.pinsKnocked.reduce((a, b) => a + b, 0) + this.calculateBonus(frame, startingIndex));
      startingIndex += 1;
    });
    return score;
  }

  calculateBonus(frame, startingIndex) {
    if (frame.bonus !== 0) {
      let framesNotFound = frame.bonus, index = startingIndex + 1, bonus = 0;
      while (framesNotFound !== 0) {
        this.frames[startingIndex].pinsKnocked.forEach( knocked => {
          bonus += knocked;
          framesNotFound -= 1;
          if (framesNotFound === 0) { return bonus; }
        })
        startingIndex += 1;
      }
    }
    else { return 0 };
  }

}
