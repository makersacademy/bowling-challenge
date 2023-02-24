class Bowling{
  constructor(){
    this.score = 0
  }
  
  hit(pin_count){
    this.score += pin_count
  }
  totalScore(){
    return this.score
  }

  spareFrame(){
    if(this.score === 10){
      return true
    }
  }
}

module.exports = Bowling;