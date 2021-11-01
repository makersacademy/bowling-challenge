var Frame = require('../docs/frame');

class Game {

  constructor(){
  this.frames = [];
  this.rollsTotals = [];
  this.bonuses = [0,0,0,0,0,0,0,0,0,0,0,0];
  this.totalsAfterBonuses = [];
  }

  getFrames() {
    return this.frames;
  }

  getRollsTotals() {
    return this.rollsTotals;
  }

  getBonuses() {
    return this.bonuses;
  }

  gettotalAfterBonuses() {
    return this.totalAfterBonuses;
  }

  // creates a frame with the rolls enteres and pushes into the frames array.
  enterFrame(roll1, roll2){
    var frame = new Frame(roll1, roll2);
    this.frames.push(frame.getRolls());
    this.rollsTotals.push(frame.calcRollsTotal());
    this.calcFrameBonuses();
    this.calcTotalsAfterBonuses();
  }

  calcFrameBonuses(){
    for (var i=0; i < this.frames.length; i++){
      if (i % 2 === 0 && this.frames[i] === 10)
        this.addStrikeBonus(i);
      else if (this.rollsTotals[i] === 10)
        this.addSpareBonus(i);
    }
  }

  addStrikeBonus(element){
    this.bonuses[element] = this.rollsTotals[element/2];
  }

  addSpareBonus(element){
    if (element % 2 === 0)
      this.bonuses[element] = this.frames[element+2];
    else if (element % 2 === 1)
      this.bonuses[element] = this.frames[element+1];
  }

  calcTotalsAfterBonuses(){
    for (var i=0; i < this.rollsTotals.length; i++){
      var total = this.rollsTotals[i] + this.bonuses[i];
      this.totalsAfterBonuses[i] = total;
    }
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



// for testing the methods in node
var game = new Game
console.log(game.enterFrame(1,2));
console.log(game.enterFrame(10,0));
console.log(game.enterFrame(5,0));
console.log(game.getBonuses());
console.log(game.gettotalsAfterBonuses());