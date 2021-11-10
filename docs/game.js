var Frame = require('../docs/frame');

class Game {

  constructor(){
  this.scorecard = [];
  this.frameCount = 0;
  }

  getCurrentScorecard() {
    return this.scorecard;
  }

  getFrameCount() {
    return this.frameCount;
  }

  // creates a frame with the rolls entered and pushes into the scorecard array.
  enterFrame(roll1, roll2){
    this.frameCount += 1;
    var frame = new Frame(roll1, roll2);
    var object = frame.getFrame();
    object.Number = this.frameCount;
    if (this.frameCount < 10){
      if (roll1 === 10 || roll1+roll2 === 10){
        object.bonus = 'pending';
      }
    }
    this.scorecard.push(object);
  }

  decideBonus(){
    for (var i=0; i < this.scorecard.length; i++){
      if (this.scorecard[i].roll1 === 10)
        this.addStrikeBonus(i);
      else if (this.scorecard[i].rollsTotal === 10)
        this.addSpareBonus(i);
    }
  }

  addStrikeBonus(i){
    this.scorecard[i].bonus = this.scorecard[i+1].rollsTotal;
  }

  addSpareBonus(i){
    this.scorecard[i].bonus = this.scorecard[i+1].roll1;
  }

  calcFrameTotal(){
    for (var i=0; i < this.scorecard.length; i++){
      var framebonus = this.scorecard[i].bonus;
      if (typeof(framebonus) == 'number'){
        this.scorecard[i].frameTotal = this.scorecard[i].rollsTotal + this.scorecard[i].bonus;
      }
    }
  }

  calcGrandTotal(){
    var sum = 0;
    for (var i=0; i < this.scorecard.length; i++){
      sum += this.scorecard[i].frameTotal;
    }
    return sum;
  }

}


module.exports = Game;



// for testing the methods in node
// .load ./docs/frame.js
// .load ./docs/game.js
// var game = new Game;
// game.enterFrame(1,2);
// game.enterFrame(2,8);
// game.enterFrame(10,0);
// game.enterFrame(5,2);
// game.getCurrentScorecard();
// game.decideBonus();
// game.calcFrameTotal();
// game.calcGrandTotal;