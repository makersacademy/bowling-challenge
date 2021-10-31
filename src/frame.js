class Frame {

  constructor(){
    this.first_roll = null;
    this.second_roll = null;
    this.score = 0;
  }

  firstRoll(pins){
    this.first_roll = pins;
    this.score += pins;
  }

  secondRoll(pins){
    this.second_roll = pins;
    this.score += pins;
  }


}

module.exports = Frame;