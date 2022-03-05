
class BowlingCard{
  constructor(){
    this.score = 0
  }

  getScore(){
    return this.score
  }

  roll(pins){
    this.score += pins
  }
}


module.exports = BowlingCard