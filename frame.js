class Frame {
  constructor(score) {
    this.score = [];
  }

  getScore() {
    let score = 0
    this.score.forEach( roll => score += roll );
    return score
  }

  rollPins(pins) {
    if (this.score.length < 2) {
    this.score.push(pins)} else {
    throw new Error('cannot roll more than twice')};
  }
}

const frame = new Frame;

console.log(frame.getScore());
console.log(frame.rollPins(4));
console.log(frame.rollPins(4));

console.log(frame.getScore());

module.exports = Frame