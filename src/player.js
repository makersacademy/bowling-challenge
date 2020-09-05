class Player {
  constructor(name) {
    this.name = name;
    this.frames = [];
    this.turns = 0;
  }

  newFrame(frame) {
    this.frames.push(frame);
  }

  frameScore() {
    let score = this.frames.map((each) => each.firstTurn + each.secondTurn);
    return score;
  }

  totalScore() {
    let score = this.frameScore().reduce((first, second) => first + second);
    return score;
  }

  frameCounter() {}
}
