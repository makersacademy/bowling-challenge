function BowlingGame() {
  this.scores = [];
  this.multiplier = 1;
  this.firstRoll = true;
  this.strike = 0;
  this.frame = 0;
  this.pinLog = [0,0]
};

BowlingGame.prototype.addPoints = function(points) {
  if (this.firstRoll === true) {
    this.frame++ 
  }
  this.multiplier = this.getMultiplier();
  this.strike = Math.max(0, this.strike - 1)
  this.scores.push(points * this.multiplier);
  this.pinLog.push(points)
  if (points === 10 && this.firstRoll === true) {
    this.firstRoll = !this.firstRoll;
    this.strike = 2;
  } 
  this.firstRoll = !this.firstRoll;
};

BowlingGame.prototype.total = function() {
  return this.scores.reduce((x, y) => x + y); 
}

BowlingGame.prototype.getMultiplier = function() {
  if (this.frame > 10 && this.firstRoll === true  && this.strike !== 0 ){
    return (13 - this.frame);
  } else if (this.frame === 11 & this.firstRoll === false) {
    return 1;
  } else if (this.pinLog.slice(-2).reduce((x, y) => x + y) === 20) {
    return 3;
  } else if (this.strike !== 0) {
    return 2;
  } else if (this.firstRoll === true && this.pinLog.slice(-2).reduce((x, y) => x + y) === 10 && this.frame <=10) {
    return 2;
  } else return  1;
}