function Game(){
  this.rollPoints = 0;
  this.strikePoints = 0;
  this.sparePoints = 0;
  this.stikePresent = false;
  this.sparePresent = false;
  this.frameBonus = 0
};

  Game.prototype.roll = function(bowl1, bowl2) {
  if(bowl1 + bowl2 > 10) return "There is only 10 pins available for one roll";
  if(bowl1 + bowl2 <= 10) return this.rollPoints =  bowl1 +  bowl2;
  };

  Game.prototype.strike = function() {
    this.strikePoints = 10;
    this.strikePresent = true;
  };

  Game.prototype.spare = function() {
    this.sparePoints = 10;
    this.sparePresent = true;
  };

  Game.prototype.rollBonus = function(bowl1) {
    if(this.rollPoints == 10) return this.frameBonus = bowl1;
  };

  Game.prototype.strikeBonus = function(bowl1, bowl2) {
    if(this.strikePresent == true) return this.frameBonus = bowl1 + bowl2;
  };

  Game.prototype.spareBonus = function(bowl1) {
    if(this.sparePresent == true) return this.frameBonus = bowl1;
  };

  Game.prototype.frameScore = function() {
    if(this.rollPoints == 10) return (this.rollPoints + this.frameBonus);
    if(this.strikePresent == true) return (this.strikePoints + this.frameBonus);
    if(this.sparePresent == true) return (this.sparePoints + this.frameBonus);
    if(this.rollPoints > 0) return this.rollPoints;
  };