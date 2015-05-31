function Game(){
  this.framePoints = 0;
};

Game.prototype.roll = function(bowl1, bowl2) {
  this.framePoints =  bowl1 +  bowl2;

  };

  Game.prototype.frameScore = function() {
    if(this.framePoints <10) return this.framePoints;

  };
