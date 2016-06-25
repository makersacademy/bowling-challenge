'use strict';

function Frame() {
  this._newFrame = true;

};

Frame.prototype = {
  
  isNewFrame: function() {
    return this._newFrame;
  }

};
