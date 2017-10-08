  'use strict';

  function Frame() {
    this._pins = 10;
    this._throws = 2;
    this._points = [];
  }

  Frame.prototype.play = function(pins){
    this._pins -= pins;
    this._points.push(pins);
    if (this.isStrike()){
      this._throws -= 2;
      this._points.push(0);
    }
    else {
      this._throws -=1;
    }
  };

  Frame.prototype.throwPoints = function() {
    return this._points.reduce((a, b) => a + b, 0);
  };

  Frame.prototype.totalPoints = function(nextFrame, nextNextFrame ) {
    return this.throwPoints() + this.bonus(nextFrame, nextNextFrame);
  };

  Frame.prototype.bonus = function(nextFrame, nextNextFrame){
    if (nextFrame === undefined){
      return 0;
    }
    if (this.isStrike()){
      return nextFrame.strikeBonus(nextNextFrame);
    }
    if(this.isSpare()){
      return nextFrame.spareBonus();
    }
  };

  Frame.prototype.strikeBonus = function(nextFrame){
    if (this.isStrike() && nextFrame !== undefined) {
      return this.throwPoints() + nextFrame.firstThrow();
    }
    return this.throwPoints();
  };

  Frame.prototype.firstThrow = function(){
    return this._points[0];
  };

  Frame.prototype.secondThrow = function(){
    return this._points[1];
  };

  Frame.prototype.isComplete = function(){
    return this._throws === 0;
  };


  Frame.prototype.isSpare = function(){
    return (this.firstThrow() + this.secondThrow()) === 10;
  };

  Frame.prototype.spareBonus = function(){
    return this.firstThrow;
  };

  Frame.prototype.isStrike = function(){
    return this.firstThrow() === 10;
  };
