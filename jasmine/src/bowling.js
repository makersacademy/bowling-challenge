function Bowling(){
  this.remainingCones = 10
 };

Bowling.prototype.throwBowl = function(frame) {
  frame.push(this.randomBowl())
};

Bowling.prototype.randomBowl = function() {
  var conesHit = Math.floor(Math.random()*this.remainingCones)+1
  this.remainingCones-=conesHit
  return conesHit
};
