var Frame = function(){
  this.pins = 10;
  this.is_over = false;
  this.rolls = [];
};

Frame.prototype.roll = function(pins_hit) {
  this.pins -= pins_hit
  this.rolls.push(pins_hit);
  this.check_if_over();
};

Frame.prototype.check_if_over = function() {
  // refactor this with if or
  if (this.rolls.length == 2){
    this.is_over = true;
  }
  if (this.pins == 0){
    this.is_over = true;
  }
};
