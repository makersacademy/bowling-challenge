'use strict'

function Game() {
  this.game = []
  this.spareOrStrike = []
  this.bonuses = []
  this.runningTotal = 0
}

Game.prototype.addFrame = function(score){
  this.game.push(score);
};

Game.prototype.returnLastElement = function(lastPosition, array){
  return array[array.length - lastPosition];
};

Game.prototype.determineOutcomeofFrame = function(){
  if(this.returnLastElement(1, this.game)[0] >= 10) {
    this.spareOrStrike.push("strike");
  } else if (this.returnLastElement(1, this.game)[0] + this.returnLastElement(1, this.game)[1] === 10) {
      this.spareOrStrike.push("spare");
    }
    else {
      this.spareOrStrike.push("neither");
    }
};

Game.prototype.calculateBonuses = function(){
  this.bonuses.push([])
  if (this.game.length > 1) {
    this.calculateSpareBonus();
    this.calculateStrikeBonus();
  }
  if (this.game.length === 10 && this.spareOrStrike[9] != 'neither'){
    this.bowlFinalFrameBonuses()
  }
};

Game.prototype.bowlFinalFrameBonuses = function(){
  var bonusBowl
  bonusBowl = Math.floor((Math.random() * 11));
  this.bonuses[9].push(bonusBowl);
  if (this.spareOrStrike[this.spareOrStrike.length-1] === 'strike'){
    bonusBowl = Math.floor((Math.random() * (11-bonusBowl)));
    this.bonuses[9].push(bonusBowl);
  }
};

Game.prototype.calculateSpareBonus = function(){
  if (this.spareOrStrike[this.spareOrStrike.length-2] === "spare") {
    this.bonuses[this.bonuses.length-2].push(this.game[this.game.length - 1][0]);
  }
};

Game.prototype.calculateStrikeBonus = function(){
  if (this.spareOrStrike[this.spareOrStrike.length-2] === "strike" && this.spareOrStrike[this.spareOrStrike.length-3] === "strike") {
    this.returnLastElement(3, this.bonuses).push(this.returnLastElement(1, this.game)[0]);
  }
  else if (this.spareOrStrike[this.spareOrStrike.length-2] === "strike" && this.spareOrStrike[this.spareOrStrike.length-1] === "strike") {
    this.returnLastElement(2, this.bonuses).push(this.returnLastElement(1, this.game)[0]);
  }
  else if (this.spareOrStrike[this.spareOrStrike.length-2] === "strike") {
    this.returnLastElement(2, this.bonuses).push(this.returnLastElement(1, this.game)[0]);
    this.returnLastElement(2, this.bonuses).push(this.returnLastElement(1, this.game)[1]);
  }
};

Game.prototype.calculateTotal = function () {
  var merged = [].concat.apply([], this.game);
  for (var i = 0; i < merged.length; i++) {
    this.runningTotal += merged[i];
  }
  var bonusMerged = [].concat.apply([], this.bonuses);
  for (var i = 0; i < bonusMerged.length; i++) {
    this.runningTotal += bonusMerged[i];
  }
};
