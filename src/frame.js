function Frame(){
  this.total = [];
}

var rollCounter = 0, x;

while (rollCounter <= 1) {
  rollCounter += 1;

  Frame.prototype.checkWhichRoll = function(){
    this.rollCounter == 1 ? 1 : 2;
  };

  Frame.prototype.roll = function(){
    x = Math.floor((Math.random() * 11) + 0);
    return x;
  };

  Frame.prototype.rollResult = function(){
    return x;
  }

  Frame.prototype.scoreTotal = function(){
    this.total.push(x);
    this.total.reduce(function(a, b){
      c = a + b;
    }, 0);
      this.spare();
      this.strike();
      return c;
  };

  Frame.prototype.strike = function(){
    return ((this.rollResult() == 10) && (this.checkWhichRoll() == 1)) ? true : false
  };

  Frame.prototype.spare = function(){
  return ((this.rollResult() == 10) && (this.checkWhichRoll() == 2)) ? true : false
  };

}// while loop!
