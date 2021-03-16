class Frame{
  constructor(){
    this._rolls = [];
    this._score = 0;
  };

  getScore(){
    return this._score;
  };

  amendScore(score){
    this._score += score
  }

  getRolls(){
    return this._rolls;
  };

  addRoll(roll, game){
    if (isNaN(roll)) {
      throw new Error("You must input a number from 1 to 10.")
    }
    if ((this._score + roll > 10) && !game.finalFrame()) {
      throw new Error("There are only 10 pins in a frame!")
    }
    this._rolls.push(roll);
    this._score += roll;
  };

  isStrike(){
    return this.getRolls()[0] === 10;
  }

  isSpare(){
    return !this.isStrike() && this.getRolls()[0] + this.getRolls()[1] === 10;
  }

};
