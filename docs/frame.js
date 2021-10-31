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

  // returns the first roll of the frame
  getFirstRoll() {
    return this.rolls[0];
  }

  // returns the second roll of the frame
  getSecondRoll() {
    return this.rolls[1];
  }

  // calculates the total score of the frame
  calcFrameTotal() {
    var sum = 0;
    for (var i=0; i < this.rolls.length; i++){
      sum += this.rolls[i];
    }
    return sum;
  }

  getBonus() {
    if (getFirstRoll() === 10) {
      return next_frame._strikeBonus(next_but_next_frame);
    }
    if (this._isSpare()) {
      return next_frame._spareBonus();
    }
    return 0;
  }

}

module.exports = Frame;
