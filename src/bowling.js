function Bowling(){
  this.roll1 = 0
  this.roll2 = 0
};

Bowling.prototype.roll = function(roll1, roll2) {
  this.roll1 = roll1;
  this.roll2 = roll2;
};

Bowling.prototype.isSpare = function() {
  if (this.roll1 == 10)
     {return false;}
  else if (this.roll1 + this.roll2 == 10)
      {return true;}
  else {return false;}
};

Bowling.prototype.isStrike = function(){
  if (this.roll1 == 10)
     {return true;}
     else {return false;}
};
