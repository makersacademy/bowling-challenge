var Frame = require('../docs/frame');

class Game {

  constructor(){
  this.frames = [];
  this.rollsTotals = [];
  this.bonuses = [];
  this.totalAfterBonuses = [];
  }

  getFrames() {
    return this.frames;
  }

  getRollsTotals() {
    return this.rollsTotals;
  }

  // getbonuses() {
  //   return this.bonuses;
  // }

  // gettotalAfterBonuses() {
  //   return this.totalAfterBonuses;
  // }

  // creates a frame with the rolls enteres and pushes into the frames array.
  enterFrame(roll1, roll2){
    var frame = new Frame(roll1, roll2);
    this.frames.push(frame.getRolls());
    this.rollsTotals.push(frame.calcRollsTotal());
    // this.bonuses.push(frame.getRollsTotal());
    // this.totalAfterBonuses.push(frame.getRollsTotal());
  }

  calcTotalOfAllFrames(){
    var sum = 0;
    for (var i=0; i < this.totalAfterBonuses.length; i++){
      sum += this.rolls[i];
    }
    return sum;
  }

}

module.exports = Game;
