
function Frame(FrameNo) {
  if ( typeof FrameNo === 'undefined') {
    this.frameNo = 1;
  } else {
    this.frameNo = FrameNo;
  }
  this.pinsKnockedDown = [];
}

Frame.prototype.Roll = function(pins) {
  if (this.pinsKnockedDown.length < 2) {
    this.pinsKnockedDown.push(pins);
  }
};
