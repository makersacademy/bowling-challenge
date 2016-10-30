'use strict'

function Frame(game) {
  this.score = []
}

Frame.prototype.bowlFrame = function(game){
  var bowl = Math.floor((Math.random() * 11));
  this.score.push(bowl);
  if (bowl <= 10){
    bowl = Math.floor((Math.random() * (11-bowl)));
    this.score.push(bowl);
  }
  game.addFrame(this.score);
};

Frame.prototype.resetFrame = function(){
  this.score = []
};

Frame.prototype.bowlFinalFrameBonuses = function(game, spareOrStrike){
  var bonusBowl = []
    bonusBowl.push(Math.floor(Math.random() * 11));
  if (spareOrStrike === "strike") {
    bonusBowl.push(Math.floor(Math.random() * 11));
  }
  game.addFinalFrameBonuses(bonusBowl)
};
