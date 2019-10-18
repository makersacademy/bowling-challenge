'use strict';

function Frame() {
  this.pin_count = [];
  this.roll = 1;
}

Frame.prototype.bowl = function(pins) {
  this.pin_count.push(pins);
};

Frame.prototype.whichRoll = function() {
  if ( this.pin_count.length === 0 ) {
    return this.roll = 1;
  } else if ( this.pin_count.length === 1 ) {
    return this.roll = 2;
  }
};
