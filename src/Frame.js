
function Frame(FrameNo) {
  if ( typeof FrameNo === 'undefined') {
    this.frameNo = 1;
  } else {
    this.frameNo = FrameNo;
  }
  this.pinsKnockedDown = [];
  this.MIN_PINS = 0;
  this.MAX_PINS = 10;
}

Frame.prototype.Roll = function(pins) {
  if (this.pinsKnockedDown.length < 2) {
    this.pinsKnockedDown.push(this.checkRoll(pins));
  }
};

Frame.prototype.checkRoll = function(num) {
  if (num < this.MIN_PINS || num > this.MAX_PINS) {
    throw new RangeError('The number entered must be between ' + this.MIN_PINS + ' - ' + this.MAX_PINS);
  } else {
    return num;
  }
};
