function Bowling(){
  this.firstBowl
  this.secondBowl
  this.extraBowl
  this.strikeBowl
};

Bowling.prototype.frame = function () {
  this.firstBowl = _randomBowl()
  this.secondBowl = _randomBowl()
};

// function _frameScoreCheck() {
//   if(this.firstBowl === 10) {
//     return 'strike'
//   } else if (this.firstBowl + this.secondBowl === 10 ) {
//     return 'spare'
//   };
// };
function _randomBowl() {
  return Math.floor(Math.random()*10)+0
};
