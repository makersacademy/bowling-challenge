const Frame = require("./frame");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

class Scorecard {
  constructor() {
    this.frames = [];
    this.bonusRolls = 0
    this.bonus = 0
  }

  getFrames() {
    return this.frames;
  }

  playRound(roll1, roll2) {
    const frame = new Frame();
    frame.setRoll1(roll1);
    frame.setRoll2(roll2);
    frame.addToTotal(frame.getRoll1() + frame.getRoll2());
    return frame;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  updateFrameTotal(frameNum, score) {
    this.frames[frameNum - 1].addToTotal(score)
  }

  playGame(data) {
    data.forEach((item, i) => {
      if (this.bonusRolls > 0) {
        this.bonus += item[0]
        this.bonusRolls -= 1
      }

      if (this.bonusRolls > 0) {
        this.bonus += item[1]
        this.bonusRoll -= 1
      }
      if (this.bonusRolls = 0 && this.bonus != 0) {
        this.updateFrameTotal(i-1, this.bonus)
        this.bonus = 0
      }

      const newFrame = this.playRound(item[0], item[1])
      this.addFrame(newFrame)
      
      if (item[0] == 10 || item[1] == 10) {
        this.bonusRolls += 2
      }
    })
  }
}

// rl.question("what input", (answer) => {
//   console.log(`hello ${answer}`)
//   rl.close()
// })


module.exports = Scorecard;
