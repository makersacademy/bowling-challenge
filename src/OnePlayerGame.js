var OnePlayerGameFile = (function() {
  'use strict';
  var Frame = FrameFile.Frame;
  var OnePlayerGame = function() {
    this.frame1 = new Frame();
    this.frame2 = new Frame();
    this.frame3 = new Frame();
    this.frame4 = new Frame();
    this.frame5 = new Frame();
    this.frame6 = new Frame();
    this.frame7 = new Frame();
    this.frame8 = new Frame();
    this.frame9 = new Frame();
    this.frame10 = new Frame();
    this.frames = [this.frame1, this.frame2, this.frame3, this.frame4, this.frame5, this.frame6, this.frame7, this.frame8, this.frame9, this.frame10];
  };

  OnePlayerGame.prototype.roll = function(pinsKnockedOver) {
    return 1;
  };

  OnePlayerGame.prototype.updateBoxes = function() {
  };
    

  return { OnePlayerGame: OnePlayerGame };
}());
