function Frame(){
  this.total = [];
  this.PINS = 10;
};

  Frame.prototype.checkWhichRoll = function(){
    this.rollCounter == 1 ? 1 : 2;
  };

  Frame.prototype.roll = function(){
    x = Math.floor((Math.random() * (this.PINS + 1)));
    return x;
  };

  Frame.prototype.pinsRemaining = function(){
      return this.PINS -= x;
  };

  Frame.prototype.rollResult = function(){
    this.pinsRemaining();
    return x;
  };

  Frame.prototype.frameTotal = function(){
    this.total.push(x);
    this.total.reduce(function(a, b){
    return c = a + b;
    }, 0);
    return c;
  }

  Frame.prototype.strike = function(){
     return ((this.rollResult() == 10) && (this.checkWhichRoll() == 1)) ? true : false
  };

  Frame.prototype.spare = function(){
  return ((this.rollResult() == 10) && (this.checkWhichRoll() == 2)) ? true : false
  };
