function Game(){
  this.rollPoints = 0;
  this.strikePoints = 0;
  this.sparePoints = 0;
  this.stikePresent = false;
  this.sparePresent = false;
};

Game.prototype.roll = function(bowl1, bowl2) {
  this.rollPoints =  bowl1 +  bowl2;

  };

  Game.prototype.strike = function() {
    this.strikePoints = 10;
    this.strikePresent = true;
  };

  Game.prototype.spare = function() {
    this.sparePoints = 10;
    this.sparePresent = true;
  };

  Game.prototype.frameScore = function() {
    if(this.rollPoints > 0) return this.rollPoints;
    if(this.strikePresent == true) return this.strikePoints;
    if(this.sparePresent == true) return this.sparePoints;
  };
