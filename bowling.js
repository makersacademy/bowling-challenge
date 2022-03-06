
class BowlingCard{
  constructor(){
    this.frame = []
    this.score = 0
  }

  getFrame(){
    return this.frame
  }

  getScore(){
    return this.score
  }

  roll(pins){
    this.score += pins
    this.frame.push(pins)
  }

  isSpare(){
    if (this.frame[0] + this.frame[1] === 10){
      return true
    }
  }

  isStrike(){
    if(this.frame[0] === 10){
      return true
    }
  }
}


module.exports = BowlingCard