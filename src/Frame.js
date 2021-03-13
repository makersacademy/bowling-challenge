"use strict";

class Frame {

  constructor(){
    this.current_frame = [];
  };

add_to_frame = function(pins) {
  this.current_frame.push(pins);
}

total = function() {
  return this.current_frame.reduce((x, y) => x + y);
}
};
