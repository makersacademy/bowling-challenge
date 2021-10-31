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
    
    if( pins != null ){
      this.score += pins;
      this.second_roll = pins;
    }
  }


}

module.exports = Frame;