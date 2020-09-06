class Game {

  constructor() {
    this.frameCount = 1;
    this.pins = 10;
    this.rollCount = 2;
  };

  isNotAbleToRoll() {
    if(this.rollCount === 0) {
      return true;
    }
  };

  isABadRoll(score) {
    if((this.pins - score) < 0) {
      return true;
    }
  };

  newRoll(score) {
    if(this.isABadRoll(score)) throw new Error('Invalid roll');
    
    if(this.isNotAbleToRoll()) throw new Error('Unable to roll');  

    this.pins -= score;
    this.rollCount -= 1;
  };
};