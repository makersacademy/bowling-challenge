function Game() {
  this.cur_frame = 1;
  this.ary = [];
  this.wholeGame = [];
  this.totalScore = 0;
}

Game.prototype.knockDown = function(pins) {
  var pinsDown = 0;
  this.ary.push(pins);
  if (this.isFrameEnd()) {
    for (var i=0; i<this.ary.length; i++) {
      pinsDown += this.ary[i];
    }
  this.wholeGame.push(this.ary);
  this.ary = [];
  this.cur_frame++;
  return pinsDown; 
  }
};

Game.prototype.frameScore = function(frameNo) {
  var score = 0;
  if (frameNo === 10) {
    for (var i=0; i<this.wholeGame[frameNo-1].length; i++) {
      score += this.wholeGame[frameNo-1][i]
    }
  }
  else {
    if (this.wholeGame[frameNo-1][0] === 10) {
      (this.wholeGame[frameNo][1])? score += 10 + this.wholeGame[frameNo][0] + this.wholeGame[frameNo][1] : score += 20 + this.wholeGame[frameNo + 1][0]
    }
    else {
      score += (this.wholeGame[(frameNo - 1)][0] + this.wholeGame[(frameNo - 1)][1]);
      if (score < 10) {score}
      else if (score === 10) {
        score += this.wholeGame[frameNo][0]
      } 
    }
  }
  this.totalScore += score;
  return score;
};

Game.prototype.isFrameEnd = function() {
  if (this.cur_frame < 10) {
    return (this.ary[0] === 10 || this.ary.length >= 2)
  }
  else if (this.cur_frame === 10 && (this.ary[0] + this.ary[1] < 10)) {
    return (this.ary.length >= 2)
  }
  else if (this.cur_frame === 10){
    return (this.ary.length >= 3)
  }
}

Game.prototype.isStrike = function() {
  return (this.ary[0] === 10);
};

Game.prototype.isSpare = function() {
  return (this.ary[0] + this.ary[1] === 10);
};