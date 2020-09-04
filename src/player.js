class Player {
  constructor(name) {
    this.name = name;
    this.frames = [];
  }

  newFrame(frame) {
    this.frames.push(frame);
  }

  frameScore() {
    let score = this.frames.map((each) => each.firstTurn + each.secondTurn);
    return score;
  }
}
