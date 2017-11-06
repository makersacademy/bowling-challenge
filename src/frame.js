function Frame() {
  this._bowls = [];
  this._score = 0;
}

//getters

Frame.prototype.bowls = function() {
  return this._bowls;
};

Frame.prototype.score = function() {
  return this._score;
};

//straight forward Frame business

Frame.prototype.bowl = function(pins) {
  if (pins > 10) throw new Error ("The maximum number of pins for one roll is 10");
  if (this.bowls()[0] + pins > 10) throw new Error ("Two bowls can only knock down 10 pins");
  this._bowls.push(pins);
};

Frame.prototype.isStrike = function() {
  if (this.bowls()[0] == 10) return true;
};

Frame.prototype.isSpare = function() {
  if(this.bowls()[0] != 10 && this.bowls()[0] + this.bowls()[1] == 10) return true;
};

Frame.prototype.isOpenFrame = function() {
  if(this.bowls()[0] + this.bowls()[1] < 10) return true;
};

Frame.prototype.isOver = function() {
  if (this._bowls.length == 2|| this.bowls()[0] == 10) return true;
};

Frame.prototype.saveScore = function() {
   if (this.isOpenFrame() == true) this._score = (this.bowls()[0] + this.bowls()[1]);
   if (this.isSpare() == true) this._score = 10;
   if (this.isStrike() ==true) this._score = 10;
};
