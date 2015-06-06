function Scorecard() {
this.allFrames = [];
};

Scorecard.prototype.addFrame = function(frame) {
  this.allFrames.push(frame);
};

Scorecard.prototype.isItSpare = function(index) {
  return this.allFrames[index].frameSpare();
};

Scorecard.prototype.lastFrame = function(index) {
  if(index === 10) {
    return true
  } else {
    return false
  }
};


Scorecard.prototype.isItStrike = function(index) {
  return this.allFrames[index].frameStrike();
};

Scorecard.prototype.nextIsStrike = function(index) {
     return this.allFrames[index + 1].frameStrike();
};

Scorecard.prototype.spareBonus = function(index) {
  if(this.isItSpare(index)) {
    return this.allFrames[index + 1].bothRolls[0];
  }
  else { return 0 }
};

Scorecard.prototype.strikeBonus = function(index) {
  if(this.isItStrike(index)) {
    if(this.nextIsStrike(index)) {
      return (this.allFrames[index + 1].totalFrameScore() + this.allFrames[index + 2].bothRolls[0]);
     } else {
      return this.allFrames[index + 1].totalFrameScore();
     }
   }
   else { return 0 }
  };

Scorecard.prototype.totalScore = function() {
  var score = 0
  for(var i = 0; i < this.allFrames.length; i++) {
  score += this.allFrames[i].totalFrameScore();
  score += this.spareBonus(i);
  score += this.strikeBonus(i);
  };
  return score;
};

Scorecard.prototype.lastFrameBonus = function(index) {
  if(this.allFrames.length === 10){
    if(this.isItStrike(index)) {
      return (this.additionalBowl() + this.additionalBowl())
    } else if (this.isItSpare(index)){
      return this.additionalBowl()
    }
  }
};


