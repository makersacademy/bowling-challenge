function ScoreCard() {
  this._frames = 10;
  this._balls = 2;
  this._strike = false;
  this._spare = false;
  this._playerLog = [];
  var strike = 0;


}

ScoreCard.prototype.playerTotal = function () {
  var total = 0
  for(var i=0; i < this._playerLog.length; i++)
  {
     total += this._playerLog[i];
  }
  return total;
};

ScoreCard.prototype.removeFrame = function () {
  this._frames -= 1;
};
ScoreCard.prototype.throwBall = function () {
  this._balls -= 1;
};

ScoreCard.prototype.playerLog = function () {
  return this._playerLog;
};
ScoreCard.prototype.lastBowl = function () {
  return this.playerLog()[this.playerLog().length-1]
};
ScoreCard.prototype.lastGo = function () {
  return this._playerLog[this._playerLog.length -1]
};
ScoreCard.prototype.lastLastGo = function () {
  return this._playerLog[this._playerLog.length -2]
};

ScoreCard.prototype.isSpare = function () {
  return this.lastGo() + this.lastLastGo() === 10;
};

ScoreCard.prototype.isStrike = function () {
  return this.lastGo() === 10;
};


ScoreCard.prototype.frames = function (){
  return this._frames;
};
ScoreCard.prototype.balls = function (){
  return this._balls;
};
ScoreCard.prototype.strike = function (){
  return this._strike;
};
ScoreCard.prototype.spare = function (){
  return this._spare;
};
ScoreCard.prototype.resetBalls = function (){
  this._balls = 2;
};
ScoreCard.prototype.addBall = function (){
  this._balls += 1;
};

ScoreCard.prototype.playerStrike = function () {
  this._strike = true;
};
ScoreCard.prototype.playerSpare = function () {
  this._spare = true;
};
ScoreCard.prototype.resetStrike = function () {
  this._strike = false;
};
ScoreCard.prototype.resetSpare = function () {
  this._spare = false;
};



ScoreCard.prototype.throw = function (score) {

  if(this.isStrike() && this.balls()===2){
    this._playerLog.push(10);
    this._playerLog.push(score);
    this.throwBall();

  }
  else if(this.isSpare() && this.balls()===0){
    //this._playerLog.push(score);
    this._playerLog.push(10);
    this._playerLog.push(score);
    this.removeFrame();
    this.addBall();
  }

  // else if (this.spare()) {
  //
  // }
  else if(this.balls()=== 0) {
    this._playerLog.push(score);
    this.removeFrame();
    this.resetBalls();
 }
  else{
    this._playerLog.push(score);
    this.throwBall();
  }
};
