function Game(){
  this._frame = 1;
  this.scorer = new Scorer()
}

Game.prototype.test = function(){
  console.log('Hi')
};

Game.prototype.play = function(){
  if (this.scorer.frame() >= 11) {
    this.displayScore()
    return
  }
  else {
    console.log('Frame: ' + this.scorer.frame())
    this.scorer.rollA();
    console.log(rollA)
    this.whichRoute();
  }
};

Game.prototype.whichRoute = function() {
  if (this.scorer.frame() >= 11) {
    this.displayScore()
    return
  }

  else if (this.scorer.islessTen(rollA)) {
    this.scorer.rollB(rollA)
    this.playLessTenRoute()
    return
  }
  else {
    this.scorer.rollA()
    this.playTenRoute()
    return
  }
};

Game.prototype.playLessTenRoute = function() {
    console.log(rollB);
    if (this.scorer.frame() >= 11) {
      this.displayScore()
      return
    }
    else if (this.scorer.isSpare(rollA, rollB)) {
      this.scorer.rollA()
      console.log(rollA)
      this.scorer.calcSpareScore(rollA)
      console.log('score ' + this.scorer.score())
      this.whichRoute()
    }
    else {
      console.log('no spare')
      this.scorer.calcOpenFrameScore(rollA, rollB)
      console.log('score ' + this.scorer.score())
      this.play()
  }
};

Game.prototype.playTenRoute = function() {
    console.log('First ten scored')
    console.log(rollA)
    if (this.scorer.frame() >= 11) {
      console.log('End. Score = ' + this.scorer.score())
      return
    }

    else if (this.scorer.islessTen(rollA)) {
      this.scorer.rollB(rollA);
      console.log(rollB);
      this.scorer.calcSingleStrikeScore(rollA, rollB);
      console.log('score ' + this.scorer.score())
      this.playLessTenRoute()
    }
    else {
      console.log('Second ten scored')
      this.scorer.rollA();
      console.log(rollA)
      this.scorer.calcDoubleStrikeScore(rollA)
      console.log('score ' + this.scorer.score())
      this.playTenRoute()
    }
};

Game.prototype.displayScore = function() {
  console.log('End. Score = ' + this.scorer.score())
};
