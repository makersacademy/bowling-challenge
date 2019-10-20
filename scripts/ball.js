
class Ball {
  constructor(pins) {
    this.pins = pins
    this.isStrike = false
    this.checkStrike()
  }

  checkStrike(){
    if(this.pins === 10){
      this.isStrike = true
    }
  }
}
