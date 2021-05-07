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

  isStrike(){
    return this.getRolls()[0] === 10;
  }

  isSpare(){
    return !this.isStrike() && this.getRolls()[0] + this.getRolls()[1] === 10;
  };

  addRoll(roll, game){
    if (isNaN(roll)) {
      throw new Error("You must input a number from 1 to 10.")
    }
    else if ((this._score + roll > 10) && this.finalFrameEdgeCases(game)) {
      throw new Error("There are only 10 pins in a frame!")
    }
    this._rolls.push(roll);
    this._score += roll;
  };

  isFFandStrike(game){
    return (game.finalFrame() && this.isStrike());
  }

  isFFLastRollSpare(game){
    return (game.finalFrame() && this.isSpare() && (this.getRolls().length === 2));
  }

  finalFrameEdgeCases(game){
    return (!this.isFFandStrike(game) && !this.isFFLastRollSpare(game))
  }

};
