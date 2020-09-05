class Player {
  constructor(name) {
    this.name = name;
    this.frames = [];
    this.turns = 0;
    this.strike = 0;
    this.spare = 0;
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
    let score = [];
    this.frames.map((each) => {
      if (each.firstTurn == "Strike") {
        this.strike += 10;
        score.push(each.firstTurn);
      } else if (each.firstTurn + each.secondTurn == 10) {
        this.spare += 10;
        score.push("Spare");
      } else {
        if (this.strike > 0) {
          score.push((each.firstTurn + each.secondTurn) * 2 + this.strike);
          this.strike = 0;
        } else if (this.spare > 0) {
          score.push(each.firstTurn * 2 + each.secondTurn + this.spare);
          this.spare = 0;
        } else {
          score.push(each.firstTurn + each.secondTurn);
        }
      }
    });

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
