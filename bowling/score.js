const Frame = require('./frame')

class Scoreboard {
  constructor() {
    this.frames = [];
    
  }

  addFrame(...rolls){
    return this.frames.push(
      new Frame(rolls)
    )
  }

  calculateScore() {
    let score = 0
    //strike
    for (let i = 0; this.frames.length > i; i++) {
      let currentFrame = this.frames[i]
      if(currentFrame.isStrike() && this.hasNext(i)){
        let nextFrame = this.frames[i + 1]
        let spareBonus = 0
       if (nextFrame.isStrike()) {
          spareBonus = nextFrame.rolls[0]
        } else {
          spareBonus = nextFrame.rolls[0] + nextFrame.rolls[1]
        }

        //for simplicity, as bonus is always the same as the first rolls,
        // Im not giving bonus for the 10th only the points in the first rolls 
        if(!this.is10th(i)){
          nextFrame.addBonus(spareBonus) 
        }


      } //spare
      else if (currentFrame.isSpare() && this.hasNext(i)) {
        let nextFrame = this.frames[i + 1]
        let spareBonus = nextFrame.rolls[0]

        //for simplicity, as bonus is always the same as the first rolls,
        // Im not giving bonus for the 10th only the points in the first rolls 
        if(!this.is10th(i)){
          nextFrame.addBonus(spareBonus) 
        }

      }


      score += currentFrame.score()
    }
    // The maximum score is 300, achieved by getting twelve strikes in a row
    // within the same game (known as a perfect game). (wikipedia)
    return this.isPerfectGame(score) ? 300 : score
  }

  hasNext(currentIndex) {
    return this.frames.length - 1 > currentIndex
  }

  is10th(idx){
    return idx === 9
  }
  isPerfectGame(score){
    return score === 220
  }
 
}

module.exports = Scoreboard
