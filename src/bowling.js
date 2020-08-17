class Bowling {
  constructor(name) {
    this.playerName = name
    this.currentFrame = 0
    this.roll = 0
    this.allFrames = [];
  }

  throw(number) {
    if (this.currentFrame + number > 10) {
      throw new Error ('Cannot score more than 10');
    } else {
    this.currentFrame += number
    this.rollCounter()
    }
  }

  rollCounter() {
    this.roll += 1
    if (this.roll === 2) {
      this.allFrames.push(this.currentFrame)
    } else if (this.roll > 2) {
      this.roll = 1
    }
  }

  totalScore() {
    
  }
}