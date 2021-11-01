class Frame{

  constructor(roll1 ,roll2){
    this.rolls = [roll1, roll2];
    this.roll1 = roll1;
    this.roll2 = roll2;
    // this.max_score = 10;
  }

  // returns the rolls inputted into an array
  getRolls(){
    return this.rolls;
  }

  // returns the first roll of the frame
  getFirstRoll() {
    return this.rolls[0];
  }

  // returns the second roll of the frame
  getSecondRoll() {
    return this.rolls[1];
  }

  // returns the second roll of the frame
  calcRollsTotal() {
    var total =  this.roll1 + this.roll2;
    return total;
  }

}

module.exports = Frame;
