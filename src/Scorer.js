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

Scorer.prototype.play = function(){
  if (this.frame() >= 11) {
    console.log('end')
    return
  }
  else {
    console.log('Frame: ' + this.frame())
    this.rollA();
    console.log(rollA)
    this.whichRoute();
  }
};

Scorer.prototype.whichRoute = function() {
  if (this.islessTen(rollA)) {
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
    console.log(rollB);
    if (this.isSpare(rollA, rollB)) {
      this.rollA()
      console.log(rollA)
      this.calcSpareScore(rollA)
      console.log('score ' + this.score())
      this.play()
    }
    else {
      console.log('no spare')
      this.calcOpenFrameScore(rollA, rollB)
      console.log('score ' + this.score())
      this.play()
  }
};

Scorer.prototype.playTenRoute = function() {
    console.log('First ten scored')
    console.log(rollA)

    if (this.islessTen(rollA)) {
      this.rollB(rollA);
      console.log(rollB);
      this.calcSingleStrikeScore(rollA, rollB);
      console.log('score ' + this.score())
      this.playLessTenRoute()
    }
    else {
      console.log('Second ten scored')
      this.rollA();
      console.log(rollA)
      this.calcDoubleStrikeScore(rollA)
      console.log('score ' + this.score())
      this.playTenRoute()
    }
};
