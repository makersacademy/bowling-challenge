function Scorer(){
  this._frame = 1;
  this._score = 0;
  var rollA;
  var rollB;
}

Scorer.prototype.frame = function() {
  return this._frame;
};

Scorer.prototype.score = function() {
  return this._score;
}

Scorer.prototype.isSpare = function(a, b) {
  return a + b === 10;
};

Scorer.prototype.isStrike = function(a) {
  return a === 10;
};

Scorer.prototype.rollA = function() {
  rollA = Math.round((Math.random() * (10) + 0));
};

Scorer.prototype.rollB = function(rollA) {
  rollB = Math.round((Math.random() * (10 - rollA) + 0));
};

Scorer.prototype.incrementFrame = function() {
  this._frame += 1;
};

Scorer.prototype.islessTen = function(roll) {
  return roll !== 10;
};

Scorer.prototype.calcOpenFrameScore = function(rollA, rollB){
  this._score += (rollA + rollB)
  this.incrementFrame();
};

Scorer.prototype.calcSpareScore = function(rollA){
  this._score += (10 + rollA)
  this.incrementFrame();
};

Scorer.prototype.calcSingleStrikeScore = function(rollA, rollB){
  this._score += (10 + rollA + rollB)
  this.incrementFrame();
};

Scorer.prototype.calcDoubleStrikeScore = function(rollA){
  this._score += (20 + rollA)
  this.incrementFrame();
};

Scorer.prototype.displayScore = function() {
  console.log('End. Score = ' + this.score())
};

Scorer.prototype.play = function(){
  if (this.frame() >= 11) {
    this.displayScore()
    return
  }
  else {
    this.rollA();
    this.whichRoute();
  }
};

Scorer.prototype.whichRoute = function() {
  if (this.frame() >= 11) {
    this.displayScore()
    return
  }

  else if (this.islessTen(rollA)) {
    this.rollB(rollA)
    this.playLessTenRoute()
    return
  }
  else {
    this.rollA()
    this.playTenRoute()
    return
  }
};

Scorer.prototype.playLessTenRoute = function() {
    if (this.frame() >= 11) {
      this.displayScore()
      return
    }
    else if (this.isSpare(rollA, rollB)) {
      this.rollA()
      this.calcSpareScore(rollA)
      this.whichRoute()
    }
    else {
      this.calcOpenFrameScore(rollA, rollB)
      this.play()
  }
};

Scorer.prototype.playTenRoute = function() {
    if (this.frame() >= 11) {
      return
    }

    else if (this.islessTen(rollA)) {
      this.rollB(rollA);
      this.calcSingleStrikeScore(rollA, rollB);
      this.playLessTenRoute()
    }
    else {
      this.rollA();
      this.calcDoubleStrikeScore(rollA)
      this.playTenRoute()
    }
};
