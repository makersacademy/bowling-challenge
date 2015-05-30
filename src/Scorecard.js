function Player (){
  this.points = 0;
  this.bonus = 0;
  this.firstbowl = 0;
};

Player.prototype.bowl1 = function(pins) {
  if (pins == 10) {
    this.bonus =+ pins;
    this.firstbowl = pins;
  } else {
    this.points += pins;
    this.firstbowl = pins;
  };
};

Player.prototype.bowl2 = function(pins) {
  if(this.firstbowl == 10) throw 'Strike, wait for next frame!'
  if(this.firstbowl + pins == 10) {
    this.bonus = pins;
  } else {
    this.points += pins
  };
};