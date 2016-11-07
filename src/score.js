function Score() {
  this.frames = [];
}

Score.prototype.addFrame = function (frame) {
  this.frames.push(frame);
};

Score.prototype.total = function () {
  var scoreTotal = 0;
  for(var i = 0; i < this.frames.length; i++) {
    scoreTotal += this.frames[i].total();
  }
  return scoreTotal;
};

// Score.prototype.strikeBonus = function(index) {
//   var bonus = this.frames[index + 1].total;
//   var frames = this.frames;
//   if (this.isAStrike(index+1)) {
//     bonus = isAStrike(index+2) ? 20 : 10 + this.frames[index+2].firstBowl;
//   }
//   return bonus;
// }
//
// Score.prototype.isAStrike(index){
//   return this.frames[index+1].outcome === 'X';
// }
