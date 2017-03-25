function Frame(){
  this.total = [];
  this.PINS = 10;
};

  Frame.prototype.checkWhichRoll = function(){
    this.rollCounter == 1 ? 1 : 2;
  };

  Frame.prototype.roll = function(){
    hits = Math.floor((Math.random() * (this.PINS + 1)));
    console.log("Roll: "+hits);
    return hits;
  };

  Frame.prototype.pinsRemaining = function(){
    return this.PINS -= hits;
  };

  Frame.prototype.rollResult = function(){
    return hits;
  };

  Frame.prototype.frameTotal = function(){
    this.total.push(hits);
    this.total.reduce(function(a, b){
    return c = a + b;
    }, 0);
    return c;
  }

    // Frame.prototype.frameEnd = function({
    //   if (this.total.length > 1){
    //
    //   }
    // });

  Frame.prototype.strike = function(){
     return ((this.rollResult() == 10) && (this.checkWhichRoll() == 1)) ? true : false
  };

  Frame.prototype.spare = function(){
  return ((this.rollResult() == 10) && (this.checkWhichRoll() == 2)) ? true : false
  };
