function Card() {
  this.frames = []
  this.bonuses = []
};

Card.prototype.store = function(frame) {
  this.frames.push(frame.bowls)
  this.trackBonus(frame)
};

Card.prototype.trackBonus = function(frame) {
  if (frame.spare) {
    this.bonuses.push(1)
  } else if (frame.strike) {
    this.bonuses.push(2)
  } else {
    this.bonuses.push(0)
  };
};

Card.prototype.applyBonus = function() {
  
};
