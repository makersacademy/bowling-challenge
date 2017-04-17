(function() {
  'use strict';
}());

function Frame(){
  this.pins = 10;
  this.strike = false;
  this.spare = false;
  this.frameScore = []
}

Frame.prototype.rollOne = function(score){
  this.frameScore.push(score);
  this.pins -= score
  if(this.pins === 0){
    this.strike = true;
  }
};

Frame.prototype.rollTwo = function(score) {
  this.frameScore.push(score);
  this.pins -= score
  if(this.pins === 0) {
    this.spare = true;
  }
}

Frame.prototype.frameTotal = function(frameScore){
  this.frameTotal = frameScore.reduce(function(a,b){
    return a + b;
  });
};
