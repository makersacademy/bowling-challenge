class Game {
  constructor() {
    this.frames = []
  }

  getFrames() {
    return this.frames
  }

  addFrame(roll1, roll2, roll3=0) {
    let frame = new Frame(roll1, roll2, roll3)
    this.frames.push(frame)
    return frame
  }

  totalScore() {
    let total = 0
    let arr = this.getFrames()
    arr.forEach(function(frame, index, framearray) {
      if(frame.isABonus()) {
        total += frame.calcBonus()
      } else if (frame.isASpare()) {
        total += framearray[index+1].getRoll1() + 10
      } else if (frame.isAStrike()) {
        total += framearray[index+1].addScore() + 10
      } else {
        total += frame.addScore()  
      }
    })
    return total === 220 ? 300 : total
  }
}