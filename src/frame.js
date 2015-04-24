var Frame = function(){
  this.pins = 10;
};

Frame.prototype.roll = function(pins_hit) {
  this.pins -= pins_hit
};

