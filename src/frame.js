class Frame {

  constructor(){
    this.first_roll = null;
    this.second_roll = null;
    this.score = 0;
  }

  firstRoll(pins){
    this._rollParams(pins);
    this.first_roll = pins;
    this.score += pins;
  }

  secondRoll(pins){
    this._rollParams(pins);
    this._secondRollParams(pins);
    this.second_roll = pins;
    this.score += pins;
  }

  _rollParams(pins){
    if(!Number.isInteger(pins)){
      throw Error('Please enter a number!')
    } else if ( pins < 0){
      throw Error('You cannot throw a negative roll!')
    } else if (pins > 10 ) {
      throw Error('There are only 10 pins!')
    };
  }

  _secondRollParams(pins){
    if(this.first_roll + pins > 10){
      throw Error('There are only 10 pins!')
    };
  }

}

module.exports = Frame;