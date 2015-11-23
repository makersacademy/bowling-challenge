(function () {
   'use strict';
}());

var frames;
var length;
var bonusScores;

function Game() {
  this.frames = [];
  this.bonusScores = [];
}

Game.prototype = {
  getFrames: function(){
    return this.frames;
  },
  storeScores: function(array){
    if(this.frameLength() < 10) {
      this.frames.push(array);
      if(this.getFrames().length > 1){
        this.calculateBonusScore();}
    }
  },
  runningScore: function(){
    var flattened = [].concat.apply([],this.frames);
    return flattened.reduce(function(a,b) {return a + b;});
  },

  frameLength: function(){
    return this.frames.length;
  },

  calculateBonusScore: function(){
      if (this._isStrike()) {
        this.bonusScores.push(this.frames[this.frameLength() -1][0] +
        this.frames[this.frameLength() -1][1]);
      }
      else if (this._isSpare()){
        this.bonusScores.push(this.frames[this.frameLength() - 1][0]);
      }
  },

  calculateTotalScore: function(){
    return this.runningScore() + this._getBonusTotal();
  },

  getBonusScores: function(){
    return this.bonusScores;
  },

  _getBonusTotal: function() {
    return this.getBonusScores().reduce(function(a,b) {return a + b;});
  },

  _isSpare: function(){
    return (this.frames[this.frameLength() - 2][0] +
      this.frames[this.frameLength() - 2][1] === 10);
  },

  _isStrike: function(){
    return (this.frames[this.frameLength() - 2][0] === 10);
  }


};
