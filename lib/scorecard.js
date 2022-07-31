const Frame = require('./frame')
const readline = require('readline')

class Scorecard {
  constructor () {
    this.allFrames = []
    this.frame = 0
  }

  async getRolls () {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    this.roll1 = await new Promise(resolve => {
      rl.question(`Enter the score for frame #${this.frame + 1} roll 1: `, resolve)
    })

    this.roll2 = await new Promise(resolve => {
      rl.question(`Enter the score for frame #${this.frame + 1} roll 2: `, resolve)
    })

    rl.close()
    return new Frame(parseInt(this.roll1), parseInt(this.roll2))
  }

  getTotalScore () {
    let total = 0
    for (const frame of this.allFrames) {
      console.log(frame)
      console.log(frame.sum())
      total += frame.sum()
    }
    return total
  }

  calculateStrikeBonus () {
    this.allFrames[this.frame - 1].setBonus(this.allFrames[this.frame].sum())
    console.log("get strike bonus", this.allFrames[this.frame - 1].getBonus())
  }

  calculateSpareBonus () {
    this.allFrames[this.frame - 1].setBonus(this.allFrames[this.frame].roll1)
    console.log("spare roll1", this.allFrames[this.frame].roll1)
    console.log("get spare bonus", this.allFrames[this.frame - 1].getBonus())
  }

  checkForBonus () {
    if (this.frame > 0 && this.allFrames[this.frame - 1].isStrike()) {
      this.calculateStrikeBonus()
    } else if (this.frame > 0 && this.allFrames[this.frame - 1].isSpare()) {
      this.calculateSpareBonus()
    }
  }

  async run () {
    while (this.frame < 10) {
      let newFrame = await this.getRolls()
      this.allFrames.push(newFrame)
      this.checkForBonus()
      console.log("Frame score added!\nCurrent score total = ", this.getTotalScore())
      console.log("Frame", this.frame + 1)
      this.frame++
    }
  }
}

module.exports = Scorecard
scorecard = new Scorecard()
scorecard.run()
