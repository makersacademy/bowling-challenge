function Frame(){
  this.DEFAULT_PINS = 10;
  this.count = 1;
  this.roll = 1;
  this.pinsStanding = this.DEFAULT_PINS;
  this.current = [];
  this.log = [];
  this.gameScore = 0;
}

  Frame.prototype.getCount = function(){
    return this.count;
  };

  Frame.prototype.next = function(){
    this.gameScore += this.calculateFrameScore();
    this.log.push(this.current);
    this.current = [];
    this.roll = 1;
    this.count ++;
  };

  Frame.prototype.calculateFrameScore = function(){
      if (this.lastIsStrike()) {
        return this.calculatePinCount() * 2;
      } else if (this.lastIsSpare()) {
        return this.calculatePinCount() + this.current[0];
      } else {
        return this.calculatePinCount();
      }
  };

  Frame.prototype.newRoll = function(){
    this.roll ++;
  };

  Frame.prototype.bowl = function(pins){
    this.current.push(pins);
    if (this.roll === 1 && pins === 10) {
      this.next();
    } else if (this.roll === 1) {
      this.newRoll();
      this.pinsStanding = this.DEFAULT_PINS - pins;
    } else if (this.roll === 2) {
      this.next();
    }
  };

  Frame.prototype.calculatePinCount = function(frame){
    var _frame = frame || this.current;
    return _frame.reduce(function(totalPins, morePins){
      return totalPins + morePins;
    }, 0);
  };

  Frame.prototype.lastIsSpare = function(){
    var last = this.lastCompletedFrame();
    if (this.calculatePinCount(last) === 10 && last.length === 2) {
    return true;
  }
    return false;
  };

  Frame.prototype.lastIsStrike = function(){
    var last = this.lastCompletedFrame();
    if (this.calculatePinCount(last) === 10 && last.length === 1) {
    return true;
  }
    return false;
  };

  Frame.prototype.lastCompletedFrame = function(){
    return this.log[this.log.length - 1] || [];
  };
