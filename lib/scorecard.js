class Scorecard {
  
  constructor() {
    this.game = [];
  };

  validateRolls(roll1, roll2, roll3) {
    if (roll1 > 10 || roll1 < 0) { throw 'Input 1 is invalid. Retry.'; }
    if (roll2 > 10 || roll2 < 0) { throw 'Input 2 is invalid. Retry.'; }
    if (roll3 > 10 || roll3 < 0) { throw 'Input 3 is invalid. Retry.'; }
    if (roll1 + roll2 > 10 && this.game.length !== 18) { throw 'You can only hit 10 pins in one frame except in the tenth.'; }
  }

  tenthFrameError() {
    if (this.game.length >= 18) { throw 'This is the tenth frame, use method addTenthFrame instead'; }
  }

  isTenthFrame(roll1, roll2) {
    if (this.game.length !== 18) { throw 'You did not reach the tenth frame yet, use method addFrame instead'; }  // not strictly necessary but good as an extra layer of security
    if (roll1 + roll2 < 10) { roll3 = 0; };
  }

  addFrame(roll1, roll2) {          // for strike, input 0 for roll2
    this.tenthFrameError();                
    this.validateRolls(roll1, roll2);
    this.game.push(roll1, roll2);
  }

  addTenthFrame(roll1, roll2, roll3) {  // input 0 if there is no 3rd roll
    this.isTenthFrame(roll1, roll2);
    this.validateRolls(roll1, roll2, roll3);
    this.game.push(roll1, roll2, roll3);
  }

  calculateBonus() {
    if (this.game.length < 21) { throw 'The game is not finished yet, '}
  }

  calculateScore() {

  }
}

scorecard = new Scorecard();


module.exports = Scorecard;