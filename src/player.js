class Player {
  constructor(name) {
    this.name = name;
    this.frames = [];
    this.turns = 0;
  }

  newFrame(frame) {
    if (
      this.turns == 10 &&
      (this.frames[-1] != "strike" || this.frames[-1] != "spare")
    ) {
      throw new Error("Max frames reached for the game");
    }

    this.frames.push(frame);
    this.frameCounter();
  }

  frameScore() {
    let score = this.frames.map((each) => each.firstTurn + each.secondTurn);
    return score;
  }

  totalScore() {
    let score = this.frameScore().reduce((first, second) => first + second);
    return score;
  }

  frameCounter() {
    this.turns = this.frames.length;
  }
}
