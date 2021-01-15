class Scorer {

  constructor() {
    this.scores = [];
  }

  calculate(frame) {
    if (frame.length === 2) {
      let frameTotal = frame.reduce((a, b) => a + b );
      if (frameTotal === 10) {
        this.scores.push('/')
      } else {
        this.scores.push(frameTotal);
      }
    }
  }

  total() {
    return this.scores.reduce((a, b) => a + b );
  }

  bonus() {
    
  }

}
