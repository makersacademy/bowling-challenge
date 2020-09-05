class Player {
  constructor(name, frameList) {
    this.name = name;
    this.frameList = frameList;
  }

  // newFrame(frame) {
  //   if (
  //     this.frames.length == 10 &&
  //     (this.frames[-1] != "Strike" || this.frames[-1] != "Spare")
  //   ) {
  //     throw new Error("Max frames reached for the game");
  //   }

  //   this.frames.push(frame);
  //   this.frameCounter();
  // }

  // frameScore() {
  //   let score = [];
  //   this.frames.map((each) => {
  //     if (each.firstTurn == "Strike") {
  //       this.strike += 10;

  //       score.push(each.firstTurn);
  //     } else if (each.firstTurn + each.secondTurn == 10) {
  //       this.spare += 10;
  //       score.push("Spare");
  //     } else {
  //       score.push(each.firstTurn + each.secondTurn);
  //     }
  //   });
  // }

  // calcEachFrame(score) {
  //   score.map((each) => {
  //     if (score[-1] == "Spare" && this.strike > 0) {
  //       score.push(
  //         (each.firstTurn + each.secondTurn) * 2 + this.spare + this.strike
  //       );
  //     } else if (this.strike > 0) {
  //       score.push((each.firstTurn + each.secondTurn) * 2 + this.strike);
  //       this.strike = 0;
  //     } else if (this.spare > 0) {
  //       score.push(each.firstTurn * 2 + each.secondTurn + this.spare);
  //       this.spare = 0;
  //     }
  //   });
  // }

  // totalScore() {
  //   let score = this.frameScore().reduce((first, second) => first + second);
  //   return score;
  // }
}
