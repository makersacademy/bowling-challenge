function Bowling(){
  this.rollScore = 0;
  this.score = 0;
  this.bowFrame = 1;
  // this.ball1Gets = 0;
  // this.ball2Gets = 0;
  this.ball = 0;
  this.pinsLeft = 10;
  this.alert = "Start Game";
};

Bowling.prototype.pinsKnocked = function(pins) {
  range = pins + 1;
  return Math.floor(Math.random() * range);
};

Bowling.prototype.rolling = function() {
  this.ball ++;
  var pins = this.pinsLeft;
  this.ball1Gets = this.pinsKnocked(pins);
  if (this.ball1Gets === 10){
    this.bowFrame ++
    this.alert = "Strike";
    return this.alert;
  };
  if (this.ball1Gets < 10){
    this.ball ++;
    this.pinsLeft -= this.ball1Gets;
    var pins = this.pinsLeft;
    this.ball2Gets = this.pinsKnocked(pins);
    this.bowFrame ++;
    this.ballsGet = this.ball1Gets + this.ball2Gets;
    if (this.ballsGet === 10){
      this.alert = "Spare";
    }
    else{
      this.alert = "Open Frame";
    };
    this.bowFrame ++;
  };
  this.ball = 0;
  return this.alert;
};

Bowling.prototype.frameScore = function(alert, pinsDown) {
  alert = this.alert;
  pinsDown = this.ballsGet;
  this.rollScore = pinsDown;
  if (alert === "Strike" || alert === "Spare") {
    this.rollScore = 10;
    return this.rollScore;
  };
  if (alert === "Open Frame") {
    this.rollScore = pinsDown;
    return this.rollScore;
  };
};

bowling = new Bowling;

console.log(bowling);
console.log(bowling.rolling());
// console.log(bowling.totalScore());
// console.log(bowling.rolling());
// console.log(bowling.totalScore());
// console.log(bowling.rolling());
// console.log(bowling.totalScore());
// console.log(bowling.rolling());
console.log(bowling.frameScore());