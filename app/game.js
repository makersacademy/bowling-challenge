function Game(results) {
  this._score = 0;
  this._pins = 10;
  this.bonus = false;
  this._balls = 20;
  this.results = results;
};

Game.prototype.start = function () {
  for(i=0; i < 9*2; i+=2){
    this.frame(i);
  };
  this.tenthFrame();
};

Game.prototype.frame = function (i) {
  var pins_down = this.getRoll(i);
  if (this.bonus && pins_down != 0) {
    this.applyBonus(pins_down);
  };
  if (pins_down < this._pins) {
    pins_down += this.getRoll(i+1);
    if (this.bonus) {
      this.applyBonus(pins_down);
    };
  };
  this._score += pins_down;
  if (pins_down === this._pins) this.setBonus();
};

Game.prototype.getRoll = function(i) {
  this._balls -= 1;
  return this.results[i];
};

Game.prototype.roll = function () {
  this._balls -= 1;
  return _.sample([1,2,3,4,5,6,7,8,9,10]);
};

Game.prototype.getScore = function(){
  return this._score;
};

Game.prototype.getNoOfBalls = function(){
  return this._balls;
};

Game.prototype.setBonus = function () {
  this.bonus = true;
};

Game.prototype.applyBonus = function(pins_down){
  this._score += pins_down;
  this.bonus = false;
};

Game.prototype.tenthFrame = function(){

  var pins_down1 = this.getRoll(18);
  if (this.bonus && pins_down1 != 0) {
    this.applyBonus(pins_down1);
  };
  if (pins_down1 === this._pins) this.setBonus();

  var pins_down2 = this.getRoll(19);
  if (this.bonus) {
    this.applyBonus(pins_down2);
  };
  this._score = this.getScore() + pins_down1 + pins_down2;
  if (pins_down2 === this._pins) this.setBonus();
  if (this.results[18] + this.results[19] >= 10 && this._balls > 0){
    this.extraRoll();
  };
};

Game.prototype.extraRoll = function(){
  if (this.getRoll(20)) {
    this._score += this.getRoll(20);
    this.applyBonus(this.getRoll(20));
  };
};

Game.prototype.noOfFrames = function () {
  return this.results.length / 2
};
