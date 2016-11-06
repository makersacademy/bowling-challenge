function Game(results) {
  this._score = 0;
  this._pins = 10;
  this.bonus = false;
  this._balls = 20;
  this._noOfFrames = 10;
  this.results = results;
};

Game.prototype.start = function () {
  for(i=1; i < this._noOfFrames; i++){
    this.frame();
    console.log(this._score);
  };
  if (this.frame() === "bonus") {
    this.extraRolls();
  };
  console.log(this._score);
};

Game.prototype.frame = function () {
  var pins_down = this.roll();
  if (this.bonus) this.applyBonus(pins_down);
  if (pins_down < this._pins) pins_down += this.roll();
  this._score += pins_down;
  if (pins_down === this._pins) {
    this.setBonus();
    return "bonus";
  }
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

Game.prototype.extraRolls = function(){
  if (this._balls > 3) this._balls = 3;
  for (i=0; i < this._balls; i++){
    this._score += this.roll();
  };
};
