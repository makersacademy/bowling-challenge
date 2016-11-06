function Game() {
  this._score = 0;
  this._pins = 10;
  this.bonus = false
};

Game.prototype.start = function () {
  for(i=1; i < 10; i++){
    this.frame();
  };
  this.frame();
  // deal with the bonus games in the edge cases
};

Game.prototype.frame = function () {
  var pins_down = this.roll();
  if (this.bonus) this.applyBonus(pins_down);
  if (pins_down < this._pins) pins_down += this.roll();
  this._score += pins_down;
  if (pins_down === this._pins) this.setBonus();
};

Game.prototype.roll = function () {
  return _.sample([1,2,3,4,5,6,7,8,9,10]);
};

Game.prototype.setBonus = function () {
  this.bonus = true;
};

Game.prototype.applyBonus = function(pins_down){
  this._score += pins_down;
  this.bonus = false;
};
