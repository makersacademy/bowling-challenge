class Bowling {
  constructor () {
    this.frameCount = 1
    this.frameArray = []
    this.currentScore = 0
  }

  getCurrentScore () {
    return this.currentScore
  }

  getCurrentFrame () {
    return this.frameCount
  }

  calculateTotal () {
    this.currentScore = this.frameArray.flat(Infinity).reduce((a, b) => a + b, 0)
  }

  addScores (rollOne, rollTwo = 0) {
    this.frameArray.push([rollOne, rollTwo])
    this.frameCount++
  }

  tenthFrame (rollOne, rollTwo = 0, rollThree = 0) {
    const addedRoll = rollTwo + rollThree
    this.frameArray.push([rollOne, addedRoll])
  }

  spareLogic () {
    const thisFrame = this.frameArray[this.frameCount - 2]
    const lastFrame = this.frameArray[this.frameCount - 3]

    if (lastFrame[0] + lastFrame[1] === 10 && lastFrame[0] !== 10) {
      lastFrame.push(thisFrame[0])
    }
  }

  strikeLogic () {
    const thisFrame = this.frameArray[this.frameCount - 2]
    const lastFrame = this.frameArray[this.frameCount - 3]

    if (lastFrame[0] === 10 && lastFrame[1] === 0) {
      lastFrame.push(thisFrame[0])
      lastFrame.push(thisFrame[1])
      lastFrame.splice(1, 1)
      if (lastFrame[2] === 0) {
        lastFrame.splice(2, 1)
      }
    }
    if (lastFrame[0] === 10 && lastFrame[1] === 10) {
      lastFrame.push(10)
    }
  }

  isPerfectGame () {
    if (this.currentScore === 280) {
      this.currentScore += 20
      return 'YOU SCORED A PERFECT GAME!!!'
    } else {
      return 'Sorry. No perfect score this time.'
    }
  }

  isGutterGame () {
    if (this.currentScore === 0) {
      return "Wow, maybe bowling isn't for you. You rolled a gutter game. I know I can't believe it either."
    } else {
      return "You didn't score a gutter game. Good for you."
    }
  }
}
