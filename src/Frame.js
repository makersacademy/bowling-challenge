
function Frame(FrameNo) {
  if ( typeof FrameNo === 'undefined') {
    this.frameNo = 1;
  } else {
    this.frameNo = FrameNo;
  }
  this.pinsKnockedDown = [];
  this.MIN_PINS = 0;
  this.MAX_PINS = 10;
  this.FINAL_FRAME = 10;
}

Frame.prototype.Roll = function(pins) {
  if (this.pinsKnockedDown.length === 0) {
    this.pinsKnockedDown.push(this.checkRoll(pins));
  } else if (this.pinsKnockedDown.length === 1){
    this.pinsKnockedDown.push(this.check2ndRoll(pins));
  } else if (this.pinsKnockedDown.length === 2 && this.frameNo === this.FINAL_FRAME) {
    this.pinsKnockedDown.push(this.check3rdRoll(pins));
  }
  console.log(this.pinsKnockedDown);
};

Frame.prototype.checkRoll = function(num) {
  if (num < this.MIN_PINS || num > this.MAX_PINS) {
    throw new RangeError('The number entered must be between ' + this.MIN_PINS + ' - ' + this.MAX_PINS);
  } else if (num === this.MAX_PINS && this.pinsKnockedDown.length < 1){
    this.pinsKnockedDown.push(num);
    return 0;
  } else {
    return num;
  }
};

Frame.prototype.check2ndRoll = function(num) {
  if (this.pinsKnockedDown[0] + this.checkRoll(num) > this.MAX_PINS) {
    throw new RangeError('You cannot enter more than a total of ' + this.MAX_PINS + ' over 2 rolls');
  } else {
    return num;
  }
};

Frame.prototype.check3rdRoll = function(num) {
  sum = this.pinsKnockedDown[0] + this.pinsKnockedDown[1];
  if (sum === this.MAX_PINS) {
    return this.checkRoll(num);
  } else {
    throw new Error("Sorry you don't get a 3rd bowl");
  }
};

module.exports = Frame;
