class Scorecard {
  
  constructor() {
    this.game = [0];
    this.points = 0;
  }

  validateRolls(roll1, roll2, roll3) {
    if (roll1 > 10 || roll1 < 0) { throw 'Input 1 is invalid. Retry.'; }
    if (roll2 > 10 || roll2 < 0) { throw 'Input 2 is invalid. Retry.'; }
    if (roll3 > 10 || roll3 < 0) { throw 'Input 3 is invalid. Retry.'; }
    if (roll1 + roll2 > 10 && this.game.length !== 19) { throw 'You can only hit 10 pins in one frame except in the tenth.'; }
  }

  tenthFrameError() {
    if (this.game.length >= 19) { throw 'This is the tenth frame, use method addTenthFrame instead'; }
  }

  isTenthFrame() {
    if (this.game.length !== 19) { throw 'You did not reach the tenth frame yet, use method addFrame instead'; }  // not strictly necessary but good as an extra layer of security
  }

  addFrame(roll1, roll2) {          // for strike, input 0 for roll2
    this.tenthFrameError();                
    this.validateRolls(roll1, roll2);
    if (roll1 === 10) { roll2 = 0 };
    this.game.push(roll1, roll2);
  }

  addTenthFrame(roll1, roll2, roll3) {  // input 0 if there is no 3rd roll
    this.isTenthFrame();
    this.validateRolls(roll1, roll2, roll3);
    if (roll1 + roll2 < 10) { roll3 = 0 };
    this.game.push(roll1, roll2, roll3);
  }

  calculateBonus() {
    if (this.game.length < 21) { throw 'The game is not finished yet, make sure all frames have been played'; }
    this.game.forEach((score, index, array) => {    // if strike
    if (score === 10 && index % 2 !== 0 && index < 18) {
      this.points += array[index + 2];
      if (array[index + 2] === 10) {
        this.points += array[index + 4]; }
      else {
        this.points += array[index + 3]; }}

    else if (score === 10 && index === 18 && index % 2 !== 0) {
        this.points += array[index + 2] + array[index + 3]; }
    else if (score + array[index + 1] === 10 && score !== 10 && index % 2 !== 0) {
      this.points += array[index + 2];
    }});
    return this.points;
  };
  

  calculateScore() {
    this.points = 0;
    this.calculateBonus();
    let sum = this.game.reduce((accumulator, value) => {
      return accumulator + value;
    });
    this.points += sum;
    return this.points;
  }
}

scorecard = new Scorecard();
scorecard.addFrame(10, 0);
scorecard.addFrame(1, 6);
scorecard.addFrame(9, 0);
scorecard.addFrame(9, 1);
scorecard.addFrame(4, 5);
scorecard.addFrame(10, 0);
scorecard.addFrame(7, 3);
scorecard.addFrame(6, 3);
scorecard.addFrame(10, 0);
scorecard.addTenthFrame(1, 9, 10);
const result = scorecard.calculateScore();
console.log(result);

module.exports = Scorecard;