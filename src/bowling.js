class Bowling {

  constructor() {
    this.frames = [];
    this.currentFrame = new Frame;
  }

  roll(pinsDowned) {
    if (this.currentFrame.inTurn === false) {
      this.frames.push(this.currentFrame); this.currentFrame = new Frame;
    }
    this.currentFrame.addTurn(pinsDowned);
  }

  score() {
    let startingIndex = 0;
    let score = [];
    this.frames.forEach( frame => {
      score.push( frame.pinsKnocked.reduce((a, b) => a + b, 0) + this.calculateBonus(frame, startingIndex));
      startingIndex += 1;
    })
  }

  calculateBonus(frame, startingIndex) {
    if (frame.bonus !== 0) {
      let framesNotFound = frame.bonus, index = startingIndex + 1, bonus = 0;
      while (framesNotFound !== 0) {
        this.frames[startingIndex].pinsKnocked.forEach( knocked => {
          bonus += knocked;
          framesNotFound -= 1;
          if (framesNotFound === 0) { return bonus; }
        } )
      }
    }
    else { return 0 };
  }

}
