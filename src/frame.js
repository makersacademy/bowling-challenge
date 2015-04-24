var Frame = function(){
  this.pins = 10;
  this.is_over = false;
  this.rolls = [];
  this.strike = false;
  this.spare = false;
};

Frame.prototype.roll = function(pins_hit) {
  this.pins -= pins_hit
  this.rolls.push(pins_hit);
  this.checkIfOver();
  this.checkIfStrike();
  this.checkIfSpare();
};

Frame.prototype.checkIfOver = function() {
  // refactor this with if or
  if (this.rolls.length == 2){
    this.is_over = true;
  }
  if (this.pins == 0){
    this.is_over = true;
  }
};

 Frame.prototype.checkIfStrike = function() {
  if(this.pins == 0 && this.rolls.length == 1){
    this.strike = true;
  }
 };

 Frame.prototype.checkIfSpare = function() {
  if(this.pins == 0 && this.rolls.length == 2){
    this.spare = true;
  }
};


