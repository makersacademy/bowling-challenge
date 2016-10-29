'use strict'

function Bowling() {
  this.game = []
  this.currentFrame = []
  this.spareOrStrike = []
  this.bonuses = []
}

Bowling.prototype.bowl = function(){
  return Math.floor(Math.random() * 11);
};

Bowling.prototype.bowlFrame = function(){
  var bowl1
  var bowl2
  bowl1 = Math.floor((Math.random() * 11));
  this.currentFrame.push(bowl1);
  if (bowl1 <= 10){
    bowl2 = Math.floor((Math.random() * (11-bowl1)));
    this.currentFrame.push(bowl2);
  }
  this.game.push(this.currentFrame);
};

Bowling.prototype.determineOutcomeofFrame = function(){
  if(this.currentFrame[0] >= 10) {
    this.spareOrStrike.push("strike");
  } else if (this.currentFrame[0] + this.currentFrame[1] === 10) {
      this.spareOrStrike.push("spare");
    }
    else {
      this.spareOrStrike.push("neither");
    }
    this.currentFrame = []
};


Bowling.prototype.calculateBonuses = function(){
  this.bonuses.push([])
  if (this.game.length > 1) {
    this.calculateSpareBonus();
    this.calculateStrikeBonus();
  }
  if (this.game.length === 10 && this.spareOrStrike[9] != 'neither'){
    this.bowlFinalFrameBonuses()
  }
};

Bowling.prototype.bowlFinalFrameBonuses = function(){
  console.log("it's worked")
  var bonusBowl1
  var bonusBowl2
  bonusBowl1 = Math.floor((Math.random() * 11));
  this.bonuses[9].push(bonusBowl1);
  if (this.spareOrStrike[this.spareOrStrike.length-1] === 'strike'){
    bonusBowl2 = Math.floor((Math.random() * (11-bonusBowl1)));
    this.bonuses[9].push(bonusBowl2);
  }
};

Bowling.prototype.calculateSpareBonus = function(){
  if (this.spareOrStrike[this.spareOrStrike.length-2] === "spare") {
    this.bonuses[this.bonuses.length-2].push(this.game[this.game.length - 1][0]);
  }
};

Bowling.prototype.calculateStrikeBonus = function(){
  if (this.spareOrStrike[this.spareOrStrike.length-2] === "strike" && this.spareOrStrike[this.spareOrStrike.length-3] === "strike") {
    this.bonuses[this.bonuses.length-3].push(this.game[this.game.length - 1][0]);
  }
  else if (this.spareOrStrike[this.spareOrStrike.length-2] === "strike" && this.spareOrStrike[this.spareOrStrike.length-1] === "strike") {
    this.bonuses[this.bonuses.length-2].push(this.game[this.game.length - 1][0]);
  }
  else if (this.spareOrStrike[this.spareOrStrike.length-2] === "strike") {
    this.bonuses[this.bonuses.length-2].push(this.game[this.game.length - 1][0]);
    this.bonuses[this.bonuses.length-2].push(this.game[this.game.length - 1][1]);
  }
};
