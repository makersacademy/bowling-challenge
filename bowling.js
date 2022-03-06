
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
  }
}


module.exports = BowlingCard