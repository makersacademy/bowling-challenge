function Frame() {
  this._rolls = 0;
  this._score = 0;
  this._rollscore = 0;
};
Frame.prototype.roll = function (num) {
  this._rollscore = num;
  this._score += num;
  // select element and put html as this._rollScore.
  this._rolls ++;
};


function Strike() {
  this._rolls = 0
  this._score = 10
}
Strike.prototype.bonusScore = function(score) {
  this._rolls ++;
  this._score += score;
  // select element and put html as this._rollScore.
}
Strike.prototype.isOver = function(){
  this._rolls === 3;
}


function Spare() {
  this._score = 10
}
Spare.prototype.bonusScore = function(score) {
  this._score += score;
  // select element and put html as this._score.
}


function TenthFrame(){
  this._rolls = 0
  this._score = 0
}
TenthFrame.prototype.roll = function(num){
  this._rollscore = num;
  this._score += num;
  this._rolls ++;
}


var firstRoll = function(n) {
  frame.roll(n);
  if (special) { special.bonusScore(n) };
  if (frame._score === 10) { special = new Strike(); }
};
var secondRoll = function(n) {
  frame.roll(n);
  if (frame._score === 10) {
  special = new Special();
} else if () { special = false;
} else { special = false; }
};


function Game() {
  var special = false;
  var strikes = [ strike1, strike2, strike3, strike4, strike5, strike6, strike7, strike8, strike8 ]
  // loop 9 times do...
  var frame = new Frame();
  // on click do the below
  firstRoll(n);
  if (frame._score < 10) {
  // on click do the below
  secondRoll(n);
  }
  // end of 9 loop
  var tenthFrame = new TenthFrame;
  tenthFrame.roll(n);
  tenthFrame.roll(n);
  if (tenthFrame._score >= 10) {
    tenthFrame.roll(n)
  };
};


// potential solution to strikes, is have an array of 9 variables, strike 1,2,3,4,5,6,7,8,9
// iterate over this and set each corresponding element to a strike if necessary, this should allow a perfect game scenario
