class Game {
  constructor() {
    this.frames = []
    const allPinsDown = 10
  }

  getFrames() {
    return this.frames
  }

  addFrame(roll1, roll2, roll3=0) {
    let frame = new Frame(roll1, roll2, roll3)
    if(frame.roll3 !==0 && this.getFrames().length < 9) throw "Bonus game is in frame 10 only!"
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
        total += framearray[index+1].getRoll1() + frame.addScore()
      } else if (frame.isAStrike()) {
          if (framearray[index+1].isAStrike()) { 
            total+= framearray[index+1].addScore() + frame.getRoll1() + framearray[index+2].getRoll1()
          } else {
            total += framearray[index+1].addScore() + frame.getRoll1()
          }
      } else {
        total += frame.addScore()  
      }
    })
    return total
  }
}
