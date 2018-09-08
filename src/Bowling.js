function BowlingGame() {
  this.scores = [0,0];
  this.multiplier = 1;
  this.firstRoll = true;
  this.strike = 0;
  this.pinLog = [0,0]
};

var scores;
var firstRoll = true;
var multiplier;
var strike;
var pinLog;

BowlingGame.prototype.addPoints = function(points) {
  if (this.strike != 0) {
    this.multiplier = 2
    this.strike--
  } else {
    this.multiplier = 1;
    if (this.firstRoll === true && this.pinLog.slice(-2).reduce((x, y) => x + y) === 10) {
      this.multiplier = 2
    }
  }
  this.scores.push(points * this.multiplier);
  this.pinLog.push(points)

  if (points === 10) {
    this.firstRoll = !this.firstRoll;
    this.strike = 2;
  }
  this.firstRoll = !this.firstRoll;
  console.log(this.strike);
  console.log(this.scores);
  console.log(this.pinLog);

};



BowlingGame.prototype.total = function() {
  return this.scores.reduce((x, y) => x + y); 
}
