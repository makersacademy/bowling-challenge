'use strict';

class Frame {
  constructor(){
    this.pinsFrame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  play(frame, roll, pins) {

    this._validateFrameValues(frame, roll, pins);
    this._validateFramePins(frame, pins);

    return true;
  };

  _validateFrameValues(frame, roll, pins) {
    if(frame > 10) {
      throw new Error("There aren't more than 10 frames");
    }
    if(frame < 1) {
      throw new Error("There can't be less than 1 frame");
    }

    if(frame < 10 & roll > 2) {
      throw new Error("You can only roll twice per frame");
    }

    if(pins > 10) {
      throw new Error("You can't hit more than 10 pins per roll");
    }
  };

  _validateFramePins(frame, pins) {
    if(frame < 10) {
      var totalPins = pins + this.pinsFrame[frame - 1];
      if(totalPins > 10) {
        throw new Error("You can't hit more than 10 pins per frame");
      }
      this.pinsFrame[frame - 1] = totalPins;
     }
  };
};
