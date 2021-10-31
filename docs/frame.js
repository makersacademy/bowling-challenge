class Frame{

  constructor(roll1 ,roll2){
    this.rolls = [roll1, roll2];
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.max_score = 10;
  }

  // returns the rolls inputted into an array
  getRolls(){
    return this.rolls;
  }

  getFirstRoll() {
    return this.rolls[0];
  };

  getSecondRoll() {
    return this.rolls[1];
  };

  // calculates the total score of the frame
  calcFrameTotal() {
    var sum = 0;
    for (var i=0; i < this.rolls.length; i++){
      sum += this.rolls[i];
    }
    return sum;
  }








}

module.exports = Frame;
