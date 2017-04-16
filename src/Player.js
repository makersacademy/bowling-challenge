var Player = function() {
  };

  Player.prototype.roll = function(roll1, roll2) {
    this.roll1 = roll1;
    this.roll2 = roll2 || 0;
  };

