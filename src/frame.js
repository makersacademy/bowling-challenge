function Frame(){
  this.total = [];
}

var rollCounter = 0;
while (rollCounter <= 1) {
  rollCounter += 1;

  Frame.prototype.checkWhichRoll = function(){
    this.rollCounter == 1 ? 1 : 2;
  };

  Frame.prototype.roll = function(){
    return Math.floor((Math.random() * 11) + 0);
  };

  Frame.prototype.strike = function(){
    return ((this.roll() == 10) && (this.checkWhichRoll() == 1)) ? true : false
  };

  
}// while loop!
